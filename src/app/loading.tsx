export default function GlobalLoading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border bg-white px-5 py-3 shadow-sm">
        <span className="h-3 w-3 animate-pulse rounded-full bg-blue-600" />
        <p className="text-sm font-medium text-slate-700">Carregando experiência...</p>
      </div>
    </div>
  );
}
