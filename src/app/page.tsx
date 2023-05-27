"use client";
import InputField from "./components/InputField";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full justify-center">
      <div className="flex flex-col container max-w-5xl bg-bgPrimary min-h-screen">
        <NavBar />
        <div className="flex w-full flex-col sm:flex-row items-center self-center mt-20 justify-center max-w-xl px-4">
          <InputField text={`Search`} />
        </div>
      </div>
    </main>
  );
}
