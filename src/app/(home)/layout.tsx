import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const HomeLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <section className="w-full h-full">
        <Navbar />
      </section>
    </div>
  );
};

export default HomeLayout;
