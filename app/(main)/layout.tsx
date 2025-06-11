import SearchBar from "../SearchBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchBar/>
      <main>{children}</main>
    </div>
  );
}
