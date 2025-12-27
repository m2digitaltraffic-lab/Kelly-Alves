
import React, { useState, useCallback, useMemo } from 'react';
import Layout from './components/Layout';
import { AppState, Option } from './types';
import { QUESTIONS, getResultConfig, STRATEGIC_MAPS } from './constants';
import { getCareerAdvice } from './services/geminiService';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<AppState>('START');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [advice, setAdvice] = useState<string | null>(null);
  const [isLoadingAdvice, setIsLoadingAdvice] = useState(false);

  const totalScore = useMemo(() => {
    return userAnswers.reduce((acc, curr) => acc + curr, 0);
  }, [userAnswers]);

  const resultConfig = useMemo(() => {
    return getResultConfig(totalScore);
  }, [totalScore]);

  const strategicMap = useMemo(() => {
    if (totalScore >= 45) return STRATEGIC_MAPS[3];
    if (totalScore >= 25) return STRATEGIC_MAPS[2];
    return STRATEGIC_MAPS[1];
  }, [totalScore]);

  const handleStart = () => {
    setGameState('QUIZ');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setAdvice(null);
  };

  const handleSelectOption = (option: Option) => {
    const nextAnswers = [...userAnswers, option.points];
    setUserAnswers(nextAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState('RESULT');
    }
  };

  const handleGenerateAdvice = async () => {
    setGameState('ADVICE');
    setIsLoadingAdvice(true);
    // Chamamos a IA apenas para um insight final complementar, mas o core é o Mapa fixo
    const generatedAdvice = await getCareerAdvice(
      totalScore,
      resultConfig.title,
      resultConfig.description
    );
    setAdvice(generatedAdvice);
    setIsLoadingAdvice(false);
  };

  const renderStart = () => (
    <div className="text-center space-y-8 animate-fadeIn">
      <div className="flex justify-center mb-4">
        <div className="relative p-1 bg-gradient-to-tr from-[#d4af37] to-[#c5a689] rounded-full">
          <div className="bg-white p-4 rounded-full">
            <svg className="w-12 h-12 text-[#c5a689]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-serif-elegant text-slate-800">Assuma o controle da sua trajetória</h2>
        <p className="text-slate-600 leading-relaxed text-lg max-w-lg mx-auto">
          Descubra agora em qual estágio você se encontra na sua jornada para ser mais valorizada e ouvida no mercado.
        </p>
      </div>
      <button
        onClick={handleStart}
        className="w-full sm:w-auto bg-[#c5a689] hover:bg-[#b3957a] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl active:scale-95 uppercase tracking-wider text-sm"
      >
        Iniciar Diagnóstico
      </button>
    </div>
  );

  const renderQuiz = () => {
    const question = QUESTIONS[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

    return (
      <div className="space-y-8 animate-fadeIn">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-bold text-[#c5a689] uppercase tracking-widest">
            <span>Questão {currentQuestionIndex + 1} / {QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 w-full bg-[#f3e9df] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#c5a689] transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h3 className="text-2xl font-serif-elegant text-slate-800 leading-tight">
          {question.text}
        </h3>

        <div className="grid gap-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectOption(option)}
              className="group flex items-center p-6 text-left border border-[#e8dcd0] rounded-2xl hover:border-[#c5a689] hover:bg-[#fdfbf9] transition-all duration-200 focus:outline-none"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#e8dcd0] group-hover:bg-[#c5a689] group-hover:border-[#c5a689] group-hover:text-white flex items-center justify-center font-bold text-[#c5a689] text-xs transition-all mr-4">
                {String.fromCharCode(65 + idx)}
              </div>
              <span className="text-slate-700 font-medium text-base group-hover:text-slate-900 transition-colors">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderResult = () => (
    <div className="text-center space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <h2 className="text-xs font-bold text-[#c5a689] uppercase tracking-[0.2em]">Seu Score Profissional</h2>
        <div className="text-7xl font-serif-elegant italic text-slate-900">{totalScore} <span className="text-xl text-slate-300 not-italic">/ 60</span></div>
      </div>

      <div className={`p-10 rounded-3xl border-2 ${totalScore >= 45 ? 'bg-[#f0f9f1] border-[#d4edda] text-[#155724]' : totalScore >= 25 ? 'bg-[#fffcf0] border-[#ffeeba] text-[#856404]' : 'bg-[#fff5f5] border-[#f5c6cb] text-[#721c24]'} transition-all duration-300`}>
        <h3 className="text-2xl font-serif-elegant mb-4 italic">{resultConfig.title}</h3>
        <p className="text-lg leading-relaxed opacity-90">{resultConfig.description}</p>
      </div>

      <div className="grid gap-4 pt-4">
        <button
          onClick={handleGenerateAdvice}
          className="py-5 px-8 rounded-full bg-[#c5a689] text-white font-bold hover:bg-[#b3957a] transition-all shadow-xl hover:shadow-[#e8dcd0] uppercase tracking-widest text-sm"
        >
          Ver O Que Fazer Agora →
        </button>
        <button
          onClick={handleStart}
          className="py-3 px-6 text-[#c5a689] font-bold hover:underline transition-colors text-sm"
        >
          Refazer Diagnóstico
        </button>
      </div>
    </div>
  );

  const renderAdvice = () => (
    <div className="space-y-8 animate-fadeIn pb-10">
      <div className="text-center">
        <h2 className="text-3xl font-serif-elegant text-slate-800 uppercase tracking-tighter">🗺️ Mapa Estratégico</h2>
        <p className="text-[#c5a689] font-bold text-xs uppercase tracking-widest mt-2">Plano de Ação Personalizado</p>
      </div>

      <div className="bg-[#fdfbf9] border border-[#e8dcd0] rounded-[40px] overflow-hidden shadow-inner">
        <div className="bg-[#c5a689] p-8 text-white">
          <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">Diagnóstico</p>
          <h3 className="text-2xl font-serif-elegant italic mb-3">{strategicMap.diagnostico}</h3>
          <p className="text-sm leading-relaxed opacity-90">{strategicMap.mensagem}</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Prioridade Estratégica</span>
            <span className="text-sm font-bold">{strategicMap.prioridade}</span>
          </div>
        </div>

        <div className="p-6 md:p-10 space-y-8">
          {strategicMap.pilares.map((p, idx) => (
            <div key={idx} className="relative group">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h4 className="text-[#8b735b] font-bold text-sm uppercase tracking-wider mb-2">{p.pilar}</h4>
                  <p className="text-slate-500 text-xs italic leading-snug">{p.foco}</p>
                </div>
                <div className="md:w-2/3 bg-white p-5 rounded-2xl border border-[#f3e9df] shadow-sm group-hover:border-[#c5a689] transition-colors">
                  <p className="text-xs font-bold text-[#c5a689] uppercase tracking-widest mb-1">Ação de Virada</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{p.acao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl">
        <h4 className="text-center font-serif-elegant text-xl italic text-slate-800 mb-6">Insights Extras da Mentoria</h4>
        {isLoadingAdvice ? (
          <div className="flex flex-col items-center justify-center py-6 space-y-3">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#c5a689]"></div>
             <p className="text-[10px] uppercase tracking-widest text-slate-400">Consultando IA...</p>
          </div>
        ) : (
          <div className="text-slate-600 text-sm leading-relaxed italic">
            {advice?.split('\n').map((para, i) => (
              <p key={i} className="mb-4 last:mb-0">
                {para.includes('**') ? (
                  para.split('**').map((chunk, j) => (
                    j % 2 === 1 ? <strong key={j} className="text-[#8b735b]">{chunk}</strong> : chunk
                  ))
                ) : para}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => window.print()}
          className="text-xs font-bold text-[#c5a689] uppercase tracking-widest hover:opacity-70 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
          Salvar Plano de Ação (PDF)
        </button>
        <button
          onClick={() => setGameState('RESULT')}
          className="w-full py-4 text-slate-400 font-medium hover:text-[#c5a689] transition-colors flex items-center justify-center gap-2 text-sm"
        >
          ← Voltar para o Diagnóstico
        </button>
      </div>
    </div>
  );

  return (
    <Layout>
      {gameState === 'START' && renderStart()}
      {gameState === 'QUIZ' && renderQuiz()}
      {gameState === 'RESULT' && renderResult()}
      {gameState === 'ADVICE' && renderAdvice()}
    </Layout>
  );
};

export default App;
