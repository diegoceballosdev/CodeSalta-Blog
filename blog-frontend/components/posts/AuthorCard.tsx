export const AuthorCard = () => {
  return (
    <section>
      <div className="border border-primary/50 rounded-2xl bg-primary/20 p-6 md:p-8">
        <div className="flex items-start gap-8">
          <div className="size-16 rounded-full bg-linear-to-br from-primary to-primary/50 flex items-center justify-center text-2xl font-bold text-white">
            C
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">CodeCraft Master</h3>
            <p className="text-stone-500">
              Desarrollador Full Stack apasionado por compartir conocimiento.
              Escribo sobre JavaScript, TypeScript, React y desarrollo web
              moderno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
