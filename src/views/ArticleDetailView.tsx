import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Share2, ArrowLeft, Check, Sparkles, MessageCircle, ExternalLink, Play } from 'lucide-react';
import { BlogPost, DISTRIBUTOR_INFO } from '../data/hgwData';
import { SeoHead } from '../components/SeoHead';

interface ArticleDetailViewProps {
  article: BlogPost;
  onNavigate: (path: string) => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({ article, onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Helper to convert youtube watch URL to embed URL if needed
  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    if (url.includes('youtube.com/watch?v=')) {
      const vid = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${vid}`;
    }
    if (url.includes('youtu.be/')) {
      const vid = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${vid}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(article.videoUrl);

  return (
    <div className="space-y-12 pb-20">
      <SeoHead
        title={`${article.title} | ${DISTRIBUTOR_INFO.pageTitle}`}
        description={article.excerpt}
        path={`/articulo/${article.id}`}
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs font-semibold inline-block mb-3">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            {article.title}
          </h1>
          <p className="mt-3 text-emerald-100 text-sm max-w-xl mx-auto leading-relaxed">
            Publicado por {article.author} · {article.date}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-stone-200 shadow-xl space-y-8 animate-in fade-in duration-300">
          {/* Back Button */}
          <button
            onClick={() => onNavigate('/blog')}
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todos los artículos y noticias</span>
          </button>

          {/* Article Meta */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-2 border-b border-stone-100 pb-4">
              <span className="flex items-center gap-2 font-semibold text-stone-800">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-stone-200 border border-emerald-500">
                  <img
                    src={article.authorPhoto || DISTRIBUTOR_INFO.photo}
                    alt={article.author}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span>{article.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-stone-400" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-stone-400" />
                {article.readTime} de lectura
              </span>
              <button
                onClick={handleShare}
                className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold cursor-pointer transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Enlace copiado' : 'Compartir'}</span>
              </button>
            </div>
          </div>

          {/* Featured Hero Image */}
          {article.image && (
            <div className="rounded-2xl overflow-hidden aspect-16/9 bg-stone-100 shadow-md">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Embedded Video (if provided) */}
          {embedUrl && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                <Play className="w-4 h-4 fill-emerald-700 text-emerald-700" />
                <span>Video Explicativo o Actividad</span>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video bg-stone-950 shadow-xl border border-stone-200">
                <iframe
                  src={embedUrl}
                  title={article.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Article Rich Content */}
          <div className="prose prose-stone max-w-none text-[18px] sm:text-[19px] leading-relaxed text-stone-700 space-y-6">
            {article.content.map((block, idx) => {
              // 1. Tables [TABLE]
              if (block.startsWith('[TABLE]')) {
                const lines = block.replace('[TABLE]\n', '').split('\n');
                const rows = lines.map(line => line.split('|').map(cell => cell.trim()));
                const headers = rows[0];
                const bodyRows = rows.slice(1);

                return (
                  <div key={idx} className="my-8 overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                      <thead className="bg-emerald-900 text-white">
                        <tr>
                          {headers.map((h, i) => (
                            <th key={i} className="px-4 py-3 font-bold text-sm uppercase tracking-wider border-r border-emerald-800 last:border-0">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {bodyRows.map((row, ri) => (
                          <tr key={ri} className="border-b border-stone-100 last:border-0 hover:bg-stone-50/50 transition-colors">
                            {row.map((cell, ci) => (
                              <td key={ci} className="px-4 py-3 text-[16px] text-stone-800 border-r border-stone-100 last:border-0">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              // 2. Headings
              if (block.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-10 mb-4 pb-2 border-b-2 border-emerald-100 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-emerald-600" />
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              if (block.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-emerald-600 rounded-full" />
                    {block.replace('### ', '')}
                  </h3>
                );
              }
              if (block.startsWith('#### ')) {
                return (
                  <h4 key={idx} className="text-lg sm:text-xl font-bold text-emerald-900 mt-6 mb-2">
                    {block.replace('#### ', '')}
                  </h4>
                );
              }

              // 3. Bullet points or List-like text
              if (block.includes('\n• ') || block.startsWith('• ') || block.includes('\n1. ')) {
                const lines = block.split('\n').filter(Boolean);
                return (
                  <ul key={idx} className="space-y-3 my-6">
                    {lines.map((line, lIdx) => {
                      const isBullet = line.startsWith('• ');
                      const isNumber = /^\d+\.\s/.test(line);
                      const cleanLine = line.replace(/^[•\d\.]+\s*/, '').trim();
                      
                      // Handle **bold**
                      const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
                      const formattedLine = parts.map((part, pi) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={pi} className="text-emerald-950 font-bold">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      });

                      return (
                        <li key={lIdx} className="flex items-start gap-3 bg-stone-50/50 p-3 rounded-xl border border-stone-100">
                          {isBullet ? (
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-emerald-600" />
                            </div>
                          ) : (
                            <span className="font-bold text-emerald-700 shrink-0 mt-0.5">{line.split('.')[0]}.</span>
                          )}
                          <div className="text-[17px] sm:text-[18px] text-stone-800 leading-relaxed">
                            {formattedLine}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                );
              }

              // 4. Regular Paragraphs with support for **bold**
              const parts = block.split(/(\*\*.*?\*\*)/g);
              const formattedBlock = parts.map((part, pi) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={pi} className="text-emerald-950 font-bold">{part.slice(2, -2)}</strong>;
                }
                return part;
              });

              return (
                <p key={idx} className="leading-relaxed">
                  {formattedBlock}
                </p>
              );
            })}
          </div>

          {/* Author Profile Card at Bottom */}
          <div className="p-6 rounded-2xl bg-emerald-900 text-white flex flex-col sm:flex-row items-center gap-5 shadow-md">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-400 shrink-0 bg-stone-900">
              <img
                src={article.authorPhoto || DISTRIBUTOR_INFO.photo}
                alt={article.author}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                Escrito por el Autor
              </span>
              <h3 className="text-lg font-bold">{article.author}</h3>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                Distribuidor independiente y asesor de bienestar HGW en Santiago de Veraguas, Panamá. Contáctame para asesoría personalizada o afiliación.
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
              <a
                href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=Hola%20${encodeURIComponent(article.author)},%20leí%20su%20artículo%20sobre%20${encodeURIComponent(article.title)}%20y%20deseo%20más%20información`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>
              <a
                href={DISTRIBUTOR_INFO.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xs inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Afiliarme a HGW</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Post Footer Callout */}
          <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-stone-900 text-sm">¿Deseas probar estos productos en Panamá?</h4>
              <p className="text-xs text-stone-500 mt-0.5">Envíos rápidos a todo el país vía Servientrega en 24 a 48h.</p>
            </div>

            <button
              onClick={() => onNavigate('/productos')}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors shrink-0 cursor-pointer shadow-xs"
            >
              Ver Productos en Tienda
            </button>
          </div>
        </div>
      </section>

      {/* Official Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-500 leading-relaxed">
          <p className="font-semibold text-stone-700 mb-1">Aviso Legal:</p>
          <p>{DISTRIBUTOR_INFO.disclaimer}</p>
        </div>
      </section>
    </div>
  );
};
