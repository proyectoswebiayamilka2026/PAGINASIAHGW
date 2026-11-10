import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowRight, Share2, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { DISTRIBUTOR_INFO, BlogPost } from '../data/hgwData';
import { getStoredArticles } from '../services/storeService';
import { SeoHead } from '../components/SeoHead';

interface BlogViewProps {
  onNavigate: (path: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  const [articles, setArticles] = useState<BlogPost[]>(() => getStoredArticles());

  useEffect(() => {
    setArticles(getStoredArticles());
  }, []);

  return (
    <div className="space-y-12 pb-20">
      <SeoHead
        title={`Artículos | ${DISTRIBUTOR_INFO.pageTitle}`}
        description="Aprende sobre las propiedades de la turmalina, arándanos azules y hongo Ganoderma. Noticias y actividades por Yamilka Batista en Santiago de Veraguas, Panamá."
        path="/blog"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs font-semibold inline-block mb-3">
            Noticias, Actividades & Educación
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Artículos, Noticias & Actividades HGW
          </h1>
          <p className="mt-3 text-emerald-100 text-sm max-w-xl mx-auto leading-relaxed">
            Descubre las novedades de nuestro equipo en Santiago de Veraguas, testimonios y fundamentos de la ciencia botánica.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {articles.map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate(`/articulo/${post.id}`)}
              className="group bg-white rounded-3xl border border-stone-200 overflow-hidden hover:border-emerald-500/50 hover:shadow-xl transition-all cursor-pointer flex flex-col w-full"
            >
              <div className="aspect-16/10 overflow-hidden bg-stone-100 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-400 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-bold text-stone-900 text-base leading-snug group-hover:text-emerald-800 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span>Leer Artículo Completo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Legal Disclaimer Block */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-500 leading-relaxed">
          <p className="font-semibold text-stone-700 mb-1">Aviso Legal:</p>
          <p>{DISTRIBUTOR_INFO.disclaimer}</p>
        </div>
      </section>
    </div>
  );
};
