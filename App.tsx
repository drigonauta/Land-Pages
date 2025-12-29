
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { LucidHeroScene, PerspectiveOrbScene } from './components/QuantumScene';
import { CognitiveNexusDiagram, ClarityMetricsDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, Info, Layers, Eye, Brain, Share2 } from 'lucide-react';

const APP_URL = "https://lucid-282091951030.southamerica-east1.run.app/";

const PaperHeader = ({ scrolled }: { scrolled: boolean }) => (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-lucid-paper/95 backdrop-blur-md border-b border-stone-200 py-3' : 'bg-transparent py-6'}`}>
    <div className="container mx-auto px-8 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="font-serif font-bold text-2xl tracking-tighter">LUCID</span>
        <div className="hidden md:block w-[1px] h-6 bg-stone-300"></div>
        <span className="hidden md:block text-[10px] font-bold tracking-[0.3em] text-stone-400 uppercase">Sistema Experimental v.01</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-widest text-stone-500">
        <a href="#abstract" className="hover:text-lucid-slate transition-colors uppercase">Resumo</a>
        <a href="#architecture" className="hover:text-lucid-slate transition-colors uppercase">Arquitetura</a>
        <a href="#experiment" className="hover:text-lucid-slate transition-colors uppercase">O Experimento</a>
        <a 
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-stone-800 text-stone-800 rounded-sm hover:bg-stone-800 hover:text-white transition-all uppercase inline-block"
        >
          Entrar no Conselho
        </a>
      </div>
    </div>
  </nav>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'LUCID: Sistema Experimental de Perspectiva Mental',
      text: 'Explore este experimento sobre percepção, consciência e tomada de decisão.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback para cópia de link se a API de compartilhamento não estiver disponível
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copiado para a área de transferência.');
      }
    } catch (err) {
      console.error('Erro ao compartilhar:', err);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-lucid-slate selection:text-white">
      <PaperHeader scrolled={scrolled} />

      {/* Hero Section: Editorial Cover */}
      <header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden border-b border-stone-200">
        <LucidHeroScene />
        <div className="container mx-auto px-8 relative z-10 text-center max-w-5xl">
          <div className="mb-12 animate-fade-in">
             <span className="text-xs font-bold tracking-[0.4em] text-lucid-bronze uppercase">Protocolo de Pesquisa N. 724</span>
          </div>
          <h1 className="font-serif text-7xl md:text-9xl font-medium leading-[0.85] mb-8 text-stone-900">
            LUCID
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-stone-600 mb-16 tracking-tight max-w-2xl mx-auto italic">
            Um sistema experimental para perspectiva mental, <br className="hidden md:block" /> clareza cognitiva e decisão ponderada.
          </h2>
          
          <div className="flex justify-center gap-12 text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase">
             <div className="flex flex-col items-center gap-2">
                <span>Versão</span>
                <span className="text-stone-900">Alpha 1.0</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <span>Status</span>
                <span className="text-lucid-bronze">Ativo</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <span>Local</span>
                <span className="text-stone-900">Núcleo Lucid</span>
             </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
           <ArrowDown size={20} className="text-stone-300" />
        </div>
      </header>

      <main className="container mx-auto px-8 max-w-6xl">
        
        {/* Abstract Section */}
        <section id="abstract" className="py-32 border-b border-stone-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
               <h3 className="font-serif text-3xl mb-4 italic">I. Resumo</h3>
               <p className="text-xs font-bold text-lucid-bronze tracking-widest uppercase mb-8">Introdução ao Sistema</p>
               <div className="w-12 h-[1px] bg-stone-300 mb-8"></div>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl font-serif leading-relaxed text-stone-800 mb-8 italic">
                LUCID é uma investigação sobre os limites da percepção sintética e a estruturação do pensamento consciente. 
              </p>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  Através de uma arquitetura denominada <strong className="text-stone-900">"Conselho Mental"</strong>, o sistema desmembra dilemas humanos complexos em múltiplas vertentes analíticas simultâneas. O objetivo não é fornecer respostas rápidas, mas sim permitir uma observação desapaixonada das engrenagens da tomada de decisão.
                </p>
                <p>
                  Este experimento utiliza inteligência artificial generativa não como um oráculo, mas como um prisma. Cada "membro" do conselho representa uma faceta da consciência — do pragmatismo lógico à sensibilidade empática — forçando o observador a confrontar o vácuo entre o estímulo e a resposta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture / Diagrams */}
        <section id="architecture" className="py-32">
          <div className="mb-20">
             <h3 className="font-serif text-4xl mb-4">II. Arquitetura do Conselho</h3>
             <p className="text-stone-500 max-w-xl">O Nexo Cognitivo organiza o processamento em sete eixos fundamentais de perspectiva.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                <CognitiveNexusDiagram />
             </div>
             <div className="space-y-12">
                <div className="flex gap-6">
                   <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 shrink-0">
                      <Layers size={18} />
                   </div>
                   <div>
                      <h4 className="font-serif text-xl mb-2">Desconstrução em Camadas</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">Cada dilema é fragmentado. Analisamos a infraestrutura do problema antes de abordar suas ramificações emocionais ou sociais.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 shrink-0">
                      <Eye size={18} />
                   </div>
                   <div>
                      <h4 className="font-serif text-xl mb-2">Perspectiva Granular</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">O sistema evita o viés de confirmação ao forçar visões antagonistas dentro de um ambiente controlado de simulação dialética.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 shrink-0">
                      <Brain size={18} />
                   </div>
                   <div>
                      <h4 className="font-serif text-xl mb-2">Sintese de Clareza</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">O resultado final não é uma conclusão, mas um mapeamento da topografia do pensamento do usuário.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* The Experiment Section */}
        <section id="experiment" className="py-32 bg-stone-50 -mx-8 px-8 border-y border-stone-200">
           <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-serif text-5xl mb-8">III. Métricas de Perspectiva</h3>
              <p className="text-lg text-stone-600 mb-16 italic">"A clareza não é a ausência de dúvida, mas a compreensão plena da sua estrutura."</p>
              
              <ClarityMetricsDiagram />
              
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[
                    { label: "Coerência", val: "0.94" },
                    { label: "Neutralidade", val: "0.98" },
                    { label: "Divergência", val: "0.82" },
                    { label: "Consciência", val: "0.89" }
                 ].map((stat, i) => (
                    <div key={i} className="flex flex-col gap-1">
                       <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">{stat.label}</span>
                       <span className="font-serif text-3xl text-stone-800">{stat.val}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Closing Action */}
        <section className="py-48 text-center">
           <div className="inline-block mb-8 p-3 rounded-full bg-stone-100">
              <Info size={24} className="text-stone-400" />
           </div>
           <h3 className="font-serif text-4xl mb-6">Pronto para a Exploração?</h3>
           <p className="text-stone-500 mb-12 max-w-lg mx-auto">
             O Conselho Mental aguarda sua provocação. Entre no sistema para iniciar a jornada rumo à clareza radical.
           </p>
           <div className="flex flex-col md:flex-row items-center justify-center gap-6">
             <a 
               href={APP_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="px-12 py-5 bg-lucid-slate text-white rounded-sm font-serif text-xl hover:bg-stone-800 transition-all shadow-xl shadow-stone-200 inline-block"
             >
               Iniciar Sessão Lucid
             </a>
             <button 
               onClick={handleShare}
               className="flex items-center gap-2 px-8 py-5 border border-stone-300 text-stone-600 rounded-sm font-serif text-lg hover:bg-stone-50 hover:border-stone-400 transition-all"
             >
               <Share2 size={18} />
               Compartilhar Experimento
             </button>
           </div>
        </section>

      </main>

      <footer className="py-24 border-t border-stone-200 bg-stone-50">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <h4 className="font-serif font-bold text-xl mb-4">LUCID</h4>
            <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-wider font-bold">
              Um estudo sobre consciência sintética e tomada de decisão humana.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 text-[10px] font-bold tracking-widest text-stone-400 uppercase">
             <div className="flex flex-col gap-4">
                <span className="text-stone-800">Referências</span>
                <a href="#" className="hover:text-lucid-bronze">Metodologia</a>
                <a href="#" className="hover:text-lucid-bronze">Ética de IA</a>
                <button onClick={handleShare} className="text-left hover:text-lucid-bronze">Compartilhar</button>
             </div>
             <div className="flex flex-col gap-4">
                <span className="text-stone-800">Contato</span>
                <a href="#" className="hover:text-lucid-bronze">Laboratório</a>
                <a href="#" className="hover:text-lucid-bronze">Anotações</a>
             </div>
          </div>
        </div>
        <div className="container mx-auto px-8 mt-24 flex justify-between items-center text-[10px] text-stone-400 font-bold uppercase tracking-widest">
           <span>OPENOW.IO © 2025 | PROJETO LUCID — TODOS OS DIREITOS RESERVADOS</span>
           <span>Documento para Fins Experimentais</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
