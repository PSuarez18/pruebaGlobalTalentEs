const STATS_LABELS = {
  total: "Total Destinos",
  showing: "Mostrando",
  countries: "Países en esta Pagina",
};

interface StatsCardsProps {
  total: number;
  showing: number;
  countries: number;
}

export function StatsCards({ total, showing, countries }: StatsCardsProps) {
  const stats = [
    { label: STATS_LABELS.total, value: total },
    { label: STATS_LABELS.showing, value: showing },
    { label: STATS_LABELS.countries, value: countries },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            {stat.label}
          </p>
          <p className="font-serif text-3xl text-brand-dark">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
