import { Card } from "../shared/Card";

export default function Services() {
  return (
    <section className="mt-24 flex h-fit w-full flex-col items-center justify-center bg-gradient-to-t from-sky-50 pb-10">
      <h1 className="text-2xl font-bold text-slate-900 md:text-6xl">
        Our Services
      </h1>
      <p className="text-xl text-slate-600 md:text-2xl">
        We provide the best services
      </p>
      <div className="mt-5 flex w-full flex-wrap justify-center md:gap-5 lg:gap-10">
        <Card img="src/source/1.jpg" />
        <Card img="src/source/2.jpg" />
        <Card img="src/source/3.jpg" />
        <Card img="src/source/4.jpg" />
      </div>
    </section>
  );
}
