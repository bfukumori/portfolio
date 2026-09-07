import { metricStats } from "@/data/portfolio";

export function MetricsBar() {
  return (
    <section className="py-8 my-6" aria-label="Métricas de Impacto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metricStats.map((stat) => (
          <div
            key={stat.id}
            className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-xs transition-all hover:border-zinc-700/80 hover:bg-zinc-900/60"
          >
            <div
              className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r ${stat.gradientClass}`}
            >
              {stat.value}
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-400 leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
