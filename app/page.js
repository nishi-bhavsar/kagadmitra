import Header from "./components/Header";

// Home screen. For now it only shows the header and an empty content area.
// Next steps will add the language selector, upload button and results here.
export default function Home() {
  return (
    <main className="mx-auto max-w-xl pb-10">
      <Header />
      <div className="mt-4 space-y-4 px-4">
        <p className="text-lg text-leaf font-semibold">
          आपला कागद लवकरच इथे समजावून सांगितला जाईल.
        </p>
      </div>
    </main>
  );
}