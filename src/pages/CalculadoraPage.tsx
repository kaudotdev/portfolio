import { FC, useState, useEffect, useCallback } from 'react';
import { FiInfo } from 'react-icons/fi';
import PropostaWidget from '../components/PropostaWidget';

// Tipos
interface ParametroProps {
  label: string;
  tooltip: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  formatValue?: (value: number) => string;
  labels: string[];
}

interface OpcaoAdicionalProps {
  id: string;
  label: string;
  tooltip: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  percentual: number;
}

// Componentes reutilizáveis
const Parametro: FC<ParametroProps> = ({
  label,
  tooltip,
  value,
  min,
  max,
  step,
  onChange,
  formatValue,
  labels
}) => (
  <div className="mb-8">
    <div className="flex justify-between items-center mb-2">
      <label className="font-medium flex items-center gap-2">
        {label}
        <span className="text-transparent md:text-gray-400 cursor-help" title={tooltip}>
          <FiInfo size={10} className=''/>
        </span>
      </label>
      <span className="font-medium">{formatValue ? formatValue(value) : value}</span>
    </div>
    
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-orange-901 rounded-lg appearance-none cursor-pointer accent-orange-500"
    />
    
    <div className="flex justify-between text-sm text-gray-400 mt-1">
      {labels.map((label, index) => (
        <span key={index}>{label}</span>
      ))}
    </div>
  </div>
);

const OpcaoAdicional: FC<OpcaoAdicionalProps> = ({
  id,
  label,
  tooltip,
  checked,
  onChange,
  percentual
}) => (
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="w-4 h-4 accent-orange-500 cursor-pointer"
    />
    <label htmlFor={id} className="font-medium flex items-center gap-2 cursor-pointer">
      {label} (+{percentual}%)
      <span className="text-gray-400 cursor-help" title={tooltip}>
        <FiInfo size={16} />
      </span>
    </label>
  </div>
);

// Constantes
const VALOR_BASE_HORA = 30;
const PRAZO_REFERENCIA = 30;

const CalculadoraPage: FC = () => {
  // Estados para os parâmetros da calculadora
  const [horas, setHoras] = useState(20);
  const [complexidade, setComplexidade] = useState(1.0);
  const [prazo, setPrazo] = useState(30);
  const [incluirBackend, setIncluirBackend] = useState(false);
  const [incluirSEO, setIncluirSEO] = useState(false);
  
  // Estados para os resultados
  const [valorEstimado, setValorEstimado] = useState(0);
  const [valorPorHora, setValorPorHora] = useState(0);

  // Função para formatar o nível de complexidade
  const formatarComplexidade = (valor: number): string => {
    if (valor <= 1.2) return "Baixa";
    if (valor <= 1.6) return "Média";
    return "Alta";
  };

  // Função para calcular o valor estimado
  const calcularValor = useCallback(() => {
    // Cálculo do valor por hora baseado na complexidade
    const valorHoraCalculado = VALOR_BASE_HORA * (1 + (complexidade - 1) * 1.5);
    
    // Multiplicador de prazo (curva exponencial)
    const multiplicadorPrazo = prazo < PRAZO_REFERENCIA
      ? 1 + Math.pow(1 - (prazo / PRAZO_REFERENCIA), 2)
      : 1;
    
    // Adicionais para funcionalidades extras
    let multiplicadorFuncionalidades = 1;
    if (incluirBackend) multiplicadorFuncionalidades += 0.35;
    if (incluirSEO) multiplicadorFuncionalidades += 0.15;
    
    // Cálculo do valor por hora final
    const valorHoraFinal = valorHoraCalculado * multiplicadorPrazo;
    setValorPorHora(Math.round(valorHoraFinal));
    
    // Cálculo do valor total e arredondamento
    const valorTotal = horas * valorHoraFinal * multiplicadorFuncionalidades;
    const valorArredondado = Math.ceil(valorTotal / 50) * 50;
    
    setValorEstimado(valorArredondado);
  }, [horas, complexidade, prazo, incluirBackend, incluirSEO]);

  // Recalcular quando os parâmetros mudarem
  useEffect(() => {
    calcularValor();
  }, [calcularValor]);

  // Estado para controlar a visibilidade do widget de proposta
  const [mostrarProposta, setMostrarProposta] = useState(false);
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24">
        <h1 className="text-3xl/8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-fira">
          Calculadora de <span className="text-orange-500">Projeto</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-normal text-gray-400 mt-1 sm:mt-1">
          Estime o custo do seu projeto com precisão
        </p>
        
        <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Coluna da esquerda - Por que calcular */}
          <div className="bg-brown-950 border border-orange-900 rounded-xl p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">📋</span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-inter">Por que calcular seu projeto?</h2>
            </div>
            
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Estimar o custo de um projeto é o primeiro passo para transformar sua ideia em realidade. Esta calculadora leva em consideração:
            </p>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {[
                {
                  icon: "⏱️",
                  title: "Horas de Desenvolvimento",
                  description: "Cada hora adicional impacta diretamente no custo final do projeto"
                },
                {
                  icon: "🔧",
                  title: "Complexidade Técnica",
                  description: "Projetos mais complexos exigem mais expertise e ferramentas especializadas"
                },
                {
                  icon: "📅",
                  title: "Prazo de Entrega",
                  description: "Cada dia a menos no prazo aumenta exponencialmente o custo do projeto"
                },
                {
                  icon: "🧩",
                  title: "Funcionalidades Adicionais",
                  description: "Backend, design personalizado, SEO e versão mobile impactam o escopo"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 text-orange-500 flex-shrink-0">
                    <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-orange-900">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50/5 rounded-lg">
              <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Valor por hora: R$ {valorPorHora},00</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Este valor é calculado com base na complexidade do projeto e no prazo de entrega.
                Quanto mais complexo o projeto e menor o prazo, maior será o valor por hora.
              </p>
            </div>
            
            <p className="mt-3 sm:mt-4 md:mt-6 text-gray-300 text-xs sm:text-sm">
              Ajuste os parâmetros ao lado para obter uma estimativa para o seu projeto específico. Para um orçamento mais preciso, entre em contato para uma análise detalhada.
            </p>
          </div>
          
          {/* Coluna da direita - Calculadora */}
          <div className="bg-brown-950 border border-orange-900 rounded-xl p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">🧮</span>
              <h2 className="text-lg/5 sm:text-xl md:text-2xl font-bold font-inter">Calcule o Valor Preciso do Seu Projeto</h2>
            </div>
            
            <p className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm">
              Ajuste cada parâmetro com precisão para obter uma estimativa detalhada
            </p>
            
            {/* Parâmetros da calculadora */}
            <Parametro
              label="Número estimado de horas"
              tooltip="Cada hora adicional impacta diretamente no custo final"
              value={horas}
              min={1}
              max={200}
              step={1}
              onChange={setHoras}
              formatValue={(value) => `${value}h`}
              labels={["1h", "100h", "200h"]}
            />
            
            <Parametro
              label="Complexidade do projeto"
              tooltip="Afeta diretamente o valor por hora do desenvolvimento"
              value={complexidade}
              min={1}
              max={2}
              step={0.1}
              onChange={setComplexidade}
              formatValue={formatarComplexidade}
              labels={["Baixa", "Média", "Alta"]}
            />
            
            <Parametro
              label="Prazo de entrega (dias)"
              tooltip="Prazos menores aumentam exponencialmente o custo"
              value={prazo}
              min={7}
              max={90}
              step={1}
              onChange={setPrazo}
              formatValue={(value) => `${value} dias ${value < 15 ? '(Urgente)' : value < 30 ? '(Normal)' : '(Flexível)'}`}
              labels={["7 dias", "30 dias", "90 dias"]}
            />
            
            {/* Funcionalidades adicionais */}
            <div className="mb-6 space-y-2 sm:space-y-3">
              <h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Funcionalidades adicionais</h3>
              
              <OpcaoAdicional
                id="backend"
                label="Backend e banco de dados"
                tooltip="Inclui API, autenticação e banco de dados"
                checked={incluirBackend}
                onChange={setIncluirBackend}
                percentual={35}
              />
              
              <OpcaoAdicional
                id="seo"
                label="Otimização para SEO"
                tooltip="Melhor posicionamento nos motores de busca"
                checked={incluirSEO}
                onChange={setIncluirSEO}
                percentual={15}
              />
            </div>
            
            {/* Valor estimado */}
            <div className="bg-gray-50/5 rounded-lg p-3 sm:p-4 md:p-6 text-center">
              <h3 className="text-base sm:text-lg font-medium text-gray-300 mb-1 sm:mb-2">Valor estimado:</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">R$ {valorEstimado.toLocaleString('pt-BR')},00</p>
              <div className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 text-left">
                <p className="mb-1 sm:mb-2">Detalhamento:</p>
                <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 sm:space-y-1">
                  <li>{horas} horas × R$ {valorPorHora}/h = R$ {(horas * valorPorHora).toLocaleString('pt-BR')}</li>
                  {(incluirBackend || incluirSEO) && (
                    <li>
                      Funcionalidades adicionais: 
                      {incluirBackend && " Backend (+35%)"}
                      {incluirSEO && " SEO (+15%)"}
                    </li>
                  )}
                  <li>Valor arredondado para o múltiplo de R$ 50 mais próximo</li>
                </ul>
              </div>
            </div>
            
            <button 
              onClick={() => setMostrarProposta(true)}
              className="mt-4 sm:mt-6 w-full py-2 sm:py-3 bg-black text-white font-medium rounded-lg border border-orange-900 hover:bg-brown-951 transition-all duration-300 text-sm sm:text-base"
            >
              Solicitar Orçamento Detalhado
            </button>
          </div>
        </div>
        
        {/* Modal de Proposta com fundo blur e animação */}
        {mostrarProposta && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 transition-all duration-300">
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-all duration-300 ease-out"
              onClick={() => setMostrarProposta(false)}
              style={{ 
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)'
              }}
            ></div>
            <div className="relative z-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
              <PropostaWidget 
                valorEstimado={valorEstimado}
                valorPorHora={valorPorHora}
                horas={horas}
                complexidade={complexidade}
                prazo={prazo}
                incluirBackend={incluirBackend}
                incluirSEO={incluirSEO}
                onClose={() => setMostrarProposta(false)}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default CalculadoraPage;