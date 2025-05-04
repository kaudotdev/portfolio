import { FC, useState, useEffect } from 'react';
import { FiInfo, FiSend, FiX } from 'react-icons/fi';

interface PropostaWidgetProps {
  valorEstimado: number;
  valorPorHora: number;
  horas: number;
  complexidade: number;
  prazo: number;
  incluirBackend: boolean;
  incluirSEO: boolean;
  onClose?: () => void; // Função para fechar o modal
}

const PropostaWidget: FC<PropostaWidgetProps> = ({
  valorEstimado,
  valorPorHora,
  horas,
  complexidade,
  prazo,
  incluirBackend,
  incluirSEO,
  onClose
}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');
  const [mostrarProposta, setMostrarProposta] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const [animado, setAnimado] = useState(false);

  // Efeito para iniciar a animação após o componente ser montado
  useEffect(() => {
    // Pequeno atraso para garantir que a transição seja aplicada
    const timer = setTimeout(() => {
      setAnimado(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  // Função para fechar com animação
  const fecharComAnimacao = () => {
    setAnimado(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300); // Tempo da animação
  };

  // Formatar a complexidade para exibição
  const formatarComplexidade = (valor: number): string => {
    if (valor <= 1.2) return "Baixa";
    if (valor <= 1.6) return "Média";
    return "Alta";
  };

  // Gerar texto da proposta
  const gerarTextoProposta = () => {
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const dataEntrega = new Date();
    dataEntrega.setDate(dataEntrega.getDate() + prazo);
    
    return `
PROPOSTA DE PROJETO - ${dataAtual}

Cliente: ${nome}
Email: ${email}
Prazo de Entrega: ${prazo} dias (${dataEntrega.toLocaleDateString('pt-BR')})

DETALHES DO PROJETO:
${descricao}

ESPECIFICAÇÕES TÉCNICAS:
- Horas estimadas: ${horas}h
- Complexidade: ${formatarComplexidade(complexidade)}
- Valor por hora: R$ ${valorPorHora},00
${incluirBackend ? '- Inclui desenvolvimento backend (+35%)' : ''}
${incluirSEO ? '- Inclui otimização SEO (+15%)' : ''}

VALOR TOTAL: R$ ${valorEstimado.toLocaleString('pt-BR')},00

Esta proposta é válida por 15 dias a partir da data de emissão.
    `;
  };

  // Copiar proposta para a área de transferência
  const copiarProposta = () => {
    navigator.clipboard.writeText(gerarTextoProposta());
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000);
  };

  // Enviar proposta (simulação)
  const enviarProposta = (e: React.FormEvent) => {
    e.preventDefault();
    setMostrarProposta(true);
  };

  return (
    <div 
      className={`bg-brown-950 border border-orange-900 rounded-xl p-6 relative transition-all duration-300 ease-out ${
        animado ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      style={{ maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', scrollbarWidth: 'none' }}
    >
      {/* Estilo para esconder a barra de rolagem */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Botão de fechar */}
      {onClose && (
        <button 
          onClick={fecharComAnimacao}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <FiX size={24} />
        </button>
      )}
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📝</span>
        <h2 className="text-xl sm:text-2xl font-bold font-inter">Solicitar Proposta Personalizada</h2>
      </div>
      
      {!mostrarProposta && (
        <p className="text-gray-300 mb-6">
          Preencha os dados abaixo para receber uma proposta detalhada com base nos parâmetros configurados
        </p>
      )}
      
      {!mostrarProposta ? (
        <form onSubmit={enviarProposta} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block mb-2 font-medium">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-3 bg-brown-952 border border-orange-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-brown-952 border border-orange-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="descricao" className="block mb-2 font-medium items-center gap-2">
              <div className="flex items-center gap-2">
                <span>Descrição do Projeto</span>
                <FiInfo size={12} className='text-gray-400 cursor-help' />
              </div>
            </label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full p-3 bg-brown-952 border border-orange-900 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          
          <div className="p-4 bg-gray-50/5 rounded-lg">
            <h3 className="font-bold mb-2">Resumo do Orçamento</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Horas estimadas:</span>
                <span>{horas}h</span>
              </li>
              <li className="flex justify-between">
                <span>Complexidade:</span>
                <span>{formatarComplexidade(complexidade)}</span>
              </li>
              <li className="flex justify-between">
                <span>Prazo de entrega:</span>
                <span>{prazo} dias</span>
              </li>
              <li className="flex justify-between">
                <span>Valor por hora:</span>
                <span>R$ {valorPorHora},00</span>
              </li>
              {incluirBackend && (
                <li className="flex justify-between">
                  <span>Backend:</span>
                  <span>Incluído (+35%)</span>
                </li>
              )}
              {incluirSEO && (
                <li className="flex justify-between">
                  <span>SEO:</span>
                  <span>Incluído (+15%)</span>
                </li>
              )}
              <li className="flex justify-between font-bold text-lg pt-2 border-t border-orange-900">
                <span>Valor Total:</span>
                <span>R$ {valorEstimado.toLocaleString('pt-BR')},00</span>
              </li>
            </ul>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <FiSend />
            Gerar Proposta
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-300 mb-6">
            Para efetivar esta proposta, copie o texto abaixo e envie para mim via <span className="font-medium text-orange-500">Discord</span> (k.dev) ou <span className="font-medium text-orange-500">Email</span> (kaudotdev@proton.me).
          </p>
          
          <div className="p-4 bg-brown-952 border border-orange-900 rounded-lg">
            <h3 className="font-bold mb-4">Proposta Gerada</h3>
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300 p-4 bg-brown-951 rounded-lg overflow-auto max-h-96">
              {gerarTextoProposta()}
            </pre>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={copiarProposta}
              className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              {copiado ? 'Copiado!' : 'Copiar Proposta'}
            </button>
            
            <button
              onClick={() => setMostrarProposta(false)}
              className="flex-1 py-3 bg-brown-951 hover:bg-brown-950 text-white font-medium rounded-lg border border-orange-900"
            >
              Voltar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropostaWidget;