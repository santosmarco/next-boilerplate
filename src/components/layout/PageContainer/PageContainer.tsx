import type { ReactComponent } from "@/types";

export const PageContainer: ReactComponent = ({ children }) => {
  return (
    <main className="py-10">
      <div className="px-4 sm:px-6 lg:px-8">{children}</div>
    </main>
  );
};
