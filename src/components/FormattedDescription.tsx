import React from 'react';
import { CheckCircle2, AlertCircle, Info, Sparkles, HelpCircle, Leaf } from 'lucide-react';

interface FormattedDescriptionProps {
  description: string;
}

export const FormattedDescription: React.FC<FormattedDescriptionProps> = ({ description }) => {
  if (!description) return null;

  // Known heading keywords to break up into distinct sections
  const headingKeywords = [
    'Beneficios del',
    'Beneficios',
    'Componentes principales',
    'Sobre la artemisa',
    'Sobre el producto',
    'Tipos de piel recomendados',
    'Modo de uso',
    'Precauciones',
    '¿Cual es el efecto',
    '¿Cómo comprar',
    '¿Por qué elegir',
    'El Jabón de Oliva Cuida',
    'Jabón de Oliva Multiefecto',
    'Información del Producto',
    'Aviso importante',
    'Características',
    'Recomendaciones',
  ];

  // Pre-process: insert markdown-like separators around known section markers
  let processed = description;

  headingKeywords.forEach((kw) => {
    const regex = new RegExp(`(?<!\n\n)(${kw}[^\n.:?]*[:?]?)(?!\n)`, 'gi');
    processed = processed.replace(regex, '\n\n### $1\n\n');
  });

  // Also separate bullet-like statements
  const bulletMarkers = [
    'Limpieza profunda:',
    'Protección electromagnetica:',
    'Piel Sana:',
    'Construcción de una barrera:',
    'Lucha contra la infracción:',
    'Promueve la circulación:',
    'Grasa:',
    'Mixta:',
    'Normal.',
    'Seca:',
    'Hidratante:',
    'Blanqueamiento:',
    'Limpieza:',
  ];

  bulletMarkers.forEach((bm) => {
    const bRegex = new RegExp(`(?<!\n)(${bm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
    processed = processed.replace(bRegex, '\n• $1');
  });

  // Split "punto y seguido" into "punto y aparte" for professional look
  // Match period followed by space and an uppercase letter, but not common abbreviations
  const sentenceRegex = /\. ([A-ZÁÉÍÓÚÑ])/g;
  processed = processed.replace(sentenceRegex, '.\n\n$1');

  // Split into raw blocks by double or single newlines
  const rawBlocks = processed.split(/\n\s*\n|\r\n\s*\r\n/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="space-y-4 text-stone-700">
      {rawBlocks.map((block, idx) => {
        // 1. Heading block
        if (block.startsWith('###')) {
          const headingText = block.replace(/^###\s*/, '').trim();
          const isWarning = headingText.toLowerCase().includes('aviso') || headingText.toLowerCase().includes('precaución');
          const isFaq = headingText.startsWith('¿') || headingText.toLowerCase().includes('cómo');

          return (
            <div key={idx} className="pt-2 first:pt-0">
              <div className="flex items-center gap-2 mb-2 pb-1 border-b border-stone-200">
                {isWarning ? (
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                ) : isFaq ? (
                  <HelpCircle className="w-5 h-5 text-emerald-700 shrink-0" />
                ) : (
                  <Sparkles className="w-5 h-5 text-emerald-700 shrink-0" />
                )}
                <h3 className="font-bold text-base sm:text-lg text-stone-900 tracking-tight uppercase">
                  {headingText}
                </h3>
              </div>
            </div>
          );
        }

        // 2. Bullet list block
        const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
        const hasBullets = lines.some((l) => l.startsWith('•') || l.startsWith('-') || l.startsWith('*'));

        if (hasBullets) {
          return (
            <ul key={idx} className="space-y-2 my-2">
              {lines.map((line, lIdx) => {
                const cleanLine = line.replace(/^[•\-*]\s*/, '').trim();
                const [boldPrefix, ...rest] = cleanLine.split(':');
                const hasColon = rest.length > 0;

                return (
                  <li key={lIdx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div className="text-[16px] sm:text-[17px] text-stone-800 leading-tight">
                      {hasColon ? (
                        <>
                          <strong className="text-emerald-950 font-bold">{boldPrefix}:</strong>
                          <span> {rest.join(':')}</span>
                        </>
                      ) : (
                        <span>{cleanLine}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          );
        }

        // 3. Disclaimer / Notice block
        if (block.toLowerCase().includes('aviso importante') || block.toLowerCase().includes('no es medicamento')) {
          return (
            <div key={idx} className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-[15px] leading-snug flex items-start gap-3 my-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900 mb-1">Aviso:</p>
                <p>{block}</p>
              </div>
            </div>
          );
        }

        // 4. Regular Paragraph
        return (
          <p key={idx} className="text-[17px] text-stone-700 leading-normal mb-1">
            {block}
          </p>
        );
      })}
    </div>
  );
};
