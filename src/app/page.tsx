"use client";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import TextInput from "./components/TextInput";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full justify-center">
      <div className="flex flex-col container max-w-5xl bg-bgPrimary min-h-screen">
        <NavBar />
        <div className="flex w-full items-center self-center mt-20 justify-center max-w-xl px-4">
          <TextInput />
          <Button text={`Search`} />
        </div>
      </div>
    </main>
  );
}
