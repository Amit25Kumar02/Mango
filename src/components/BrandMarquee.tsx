import { useMemo } from 'react';
import GoogleOriginalWordmark from 'devicons-react/icons/GoogleOriginalWordmark';
import OpenapiPlainWordmark from 'devicons-react/icons/OpenapiPlainWordmark';
import AzureOriginalWordmark from 'devicons-react/icons/AzureOriginalWordmark';
import AmazonwebservicesPlainWordmark from 'devicons-react/icons/AmazonwebservicesPlainWordmark';


const logos = [
    // { name: <GoogleOriginalWordmark color='white' size="200" />, svg: '🥭' },
  // { name: <OpenapiPlainWordmark color='white' size="150" />, svg: '⚙️' },
  // { name: <AmazonwebservicesPlainWordmark color='white' size="100" />, svg: '☁️' },
  // { name: <AzureOriginalWordmark color='white' size="150" />, svg: '🔷' },
  // { name: 'Shopify', svg: '🛍️' },
  { name: 'AWS' },
  { name: 'Docker' },
  { name: 'Kubernetes' },
  { name: 'Terraform' },
  { name: 'Apache Airflow' },
  { name: 'TensorFlow' },
  { name: 'PyTorch' },
  { name: 'JAX' },
  { name: 'Transformers' },
  { name: 'Scikit-learn' },
  { name: 'OpenAI' },
  { name: 'Anthropic Claude' },
  { name: 'Mistral AI' },
  { name: 'Hugging Face' },
  { name: 'Ollama' },
  { name: 'LangChain' },
  { name: 'LlamaIndex' },
  { name: 'AutoGen' },
  { name: 'CrewAI' },
  { name: 'Instructor' },
  { name: 'Pinecone' },
  { name: 'Weaviate' },
  { name: 'ChromaDB' },
  { name: 'Qdrant' },
  { name: 'Milvus' },
  { name: 'Weights & Biases' },
  { name: 'MLflow' },
  { name: 'DVC' },
  { name: 'ClearML' },
  { name: 'Neptune' },
  { name: 'Python' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'SQL' },
  { name: 'R' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'FastAPI' },
  { name: 'Streamlit' },
  { name: 'Gradio' },
  { name: 'Apache Spark' },
  { name: 'Kafka' },
  { name: 'Snowflake' },
  { name: 'dbt' },
  { name: 'Databricks' },
  { name: 'Vercel' },
  { name: 'Supabase' },
  { name: 'Prisma' },
  { name: 'GraphQL' },
  { name: 'Redis' }
];

export const BrandMarquee = ({data=[]}) => {
  const items = data.length > 0 ? data : useMemo(() => [...logos, ...logos, ...logos], []);
  return (
    <section id="clients" aria-label="brand-marquee" className="relative py-0 overflow-hidden -skew-y-4 md:-skew-y-3 mb-20 mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/85 via-emerald-500 to-emerald-500/85" />
      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.15)' }} />

      <div className="relative">
        <div className="marquee flex items-center whitespace-nowrap">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="mx-10 flex items-center gap-3 text-white/95 opacity-95"
            >
             {item.name ? <span className="text-xl md:text-2xl font-sans-serif tracking-wide my-10">
                {item.name}
              </span> : 
              <div className='flex flex-col m-5'>
                <span className="text-xl md:text-2xl text-white font-sans-serif tracking-wide text-center">
                {item.title} </span>
                <span className="text-xl md:text-2xl text-white font-sans-serif tracking-wide">
                {item.subtitle}
                </span>
             
              </div>}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;


