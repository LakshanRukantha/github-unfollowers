"use client";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-w-min min-h-screen bg-bgPrimary w-full justify-center">
      <div className="flex flex-col container max-w-5xl min-h-screen">
        <NavBar />
        <InputField />
        <Footer
          text="Copyright © 2023 | Made with ❤️ by "
          url="https://lakshanrukantha.github.io/"
        />
      </div>
    </main>
  );
}
