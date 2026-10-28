import Header from "./components/Header";

// Home screen. The header is outside <main> so the saffron banner
// stretches across the full screen. Next steps will add the language
// selector, upload button and results here.
export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-xl space-y-4 px-4 pb-10 pt-4">
        <p className="text-lg font-semibold text-leaf">
          आपला कागद लवकरच इथे समजावून सांगितला जाईल.
        </p>
      </main>
    </>
  );
}