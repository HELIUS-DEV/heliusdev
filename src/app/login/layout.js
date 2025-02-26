export default function Layout({ children }) {
  return (
    <div>
        <header> this is header of page </header>
      <main>{children}</main>
    </div>
  );
}