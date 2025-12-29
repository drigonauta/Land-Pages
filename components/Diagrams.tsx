
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- COGNITIVE NEXUS DIAGRAM ---
// A representation of the "Mental Council" perspectives
export const CognitiveNexusDiagram: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const perspectives = [
    { name: "Lógica Pura", color: "#2C3E50", desc: "Estrutura formal e análise de fatos brutos." },
    { name: "Ecos de Empatia", color: "#A67C52", desc: "O impacto humano e ressonância emocional." },
    { name: "Visão Pragmática", color: "#4A5568", desc: "Resultados práticos e viabilidade imediata." },
    { name: "Ética Sistêmica", color: "#2D3748", desc: "Conformidade com valores universais e de longo prazo." },
    { name: "Ceticismo Radical", color: "#1A202C", desc: "Desconstrução de premissas e busca por falhas." },
    { name: "Intuição Espacial", color: "#718096", desc: "Padrões não lineares e conexões abstratas." },
    { name: "O Observador", color: "#000000", desc: "O ponto de síntese e neutralidade absoluta." },
  ];

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
      {/* Background circles */}
      <div className="absolute inset-0 border border-stone-200 rounded-full opacity-50"></div>
      <div className="absolute inset-8 border border-stone-100 rounded-full opacity-50"></div>
      
      {/* Central Node */}
      <div className="z-10 w-16 h-16 bg-white border-2 border-stone-800 rounded-full flex items-center justify-center shadow-lg group">
         <div className="w-8 h-8 rounded-full bg-lucid-slate animate-pulse"></div>
      </div>

      {/* Orbiting Nodes */}
      {perspectives.map((p, i) => {
        const angle = (i * (360 / perspectives.length)) * (Math.PI / 180);
        const radius = 140;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={i}
            className="absolute z-20 cursor-pointer"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x, y }}
            transition={{ delay: i * 0.1, duration: 1 }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div 
              className={`w-4 h-4 rounded-full transition-all duration-300 ${active === i ? 'scale-150 shadow-xl' : 'scale-100'}`}
              style={{ backgroundColor: p.color }}
            />
            {active === i && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-8 left-1/2 -translate-x-1/2 w-48 bg-white p-4 border border-stone-200 shadow-2xl z-30 pointer-events-none"
              >
                <h5 className="font-serif text-sm font-bold mb-1">{p.name}</h5>
                <p className="text-[10px] text-stone-500 leading-normal uppercase tracking-wider">{p.desc}</p>
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {perspectives.map((_, i) => {
           const angle = (i * (360 / perspectives.length)) * (Math.PI / 180);
           const radius = 140;
           const x2 = 200 + Math.cos(angle) * radius;
           const y2 = 200 + Math.sin(angle) * radius;
           return (
             <line 
                key={i} 
                x1="200" y1="200" 
                x2={x2} y2={y2} 
                stroke="#E2E8F0" 
                strokeWidth="1"
                className="opacity-40"
             />
           );
        })}
      </svg>
    </div>
  );
};

// --- CLARITY METRICS DIAGRAM ---
export const ClarityMetricsDiagram: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="w-full h-64 bg-white border border-stone-200 rounded-sm relative overflow-hidden group p-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute top-4 left-4 text-[9px] font-bold text-stone-300 uppercase tracking-widest">
        Análise de Frequência Mental / 24h
      </div>
      
      <div className="flex items-end justify-between h-full gap-2">
        {[...Array(24)].map((_, i) => {
          const height = 20 + Math.sin(i * 0.5) * 40 + Math.random() * 30;
          return (
            <motion.div
              key={i}
              className="flex-1 bg-stone-100 relative group"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: i * 0.02, duration: 1 }}
            >
              <div 
                className={`absolute inset-0 bg-lucid-slate opacity-0 transition-opacity duration-300 ${hovered ? 'opacity-20' : ''}`}
                style={{ height: hovered ? `${height + 5}%` : '0%' }}
              ></div>
              {i === 12 && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[8px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                   PICO DE CLAREZA: +92%
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-1/2 border-b border-stone-50 w-full"></div>
        <div className="h-1/4 border-b border-stone-50 w-full"></div>
        <div className="h-3/4 border-b border-stone-50 w-full"></div>
      </div>
    </div>
  );
};
