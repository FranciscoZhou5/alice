import Settings from "./Settings";

export default function AppHeader() {
  return (
    <header className="h-12 border-b border-gray flex justify-between items-center px-4 md:px-8 lg:px-16">
      <div></div>
      <div>
        <Settings />
      </div>
    </header>
  );
}
