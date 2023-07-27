export default function JLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-hidden h-auto min-h-full box-border px-[0px] pt-[50px] bg-[white] flex justify-center">
      {children}
    </div>
  );
}
