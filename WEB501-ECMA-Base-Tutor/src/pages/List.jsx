import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function ListPage() {
  const [courses, setCourses] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/courses");
        setCourses(data);
      } catch (error) {
        toast.error("Loi Call Api");
      }
    };
    getAll();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (confirm("Xoa")) {
        await axios.delete(`http://localhost:3000/courses/${id}`);
        setCourses(courses.filter((course) => course.id !== id));
        toast.success("xoa thanh cong");
      }
    } catch (error) {
      toast.error("Loi Call Api");
    }
  };
  const handleSearch = () => {
    console.log("handleSearch");
    const data = courses.filter((course) =>
      course.name.toLowerCase().includes(keyword.toLocaleLowerCase())
    );
    setCourses(data);
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>
      <div className="my-2 flex">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          id="text"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={handleSearch}>Tim kiem</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                tên khoa học
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                thời gian học
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                mô tả ngắn
              </th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr className="hover:bg-gray-50" key={course.id}>
                <td className="px-4 py-2 border border-gray-300">
                  {course.id}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {course.name}
                </td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300">
                  <button onClick={() => handleDelete(course.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
