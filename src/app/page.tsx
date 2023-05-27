"use client";
import InputField from "./components/InputField";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-w-min min-h-screen bg-bgPrimary w-full justify-center">
      <div className="flex flex-col container max-w-5xl min-h-screen pb-8">
        <NavBar />
        <InputField />
      </div>
    </main>
  );
}
