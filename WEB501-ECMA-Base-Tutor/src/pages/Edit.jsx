import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function EditPage() {
  // lay id tren url thong qua useParam
  // => call api getDetail(id)
  // update State

  // state luu du lieu
  const [name, setName] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [level, setLevel] = useState("chuyen sau");

  const validateData = () => {
    let message = "";
    if (!name || !studyTime || !level) {
      message = "can nhap day du thong";
    }
    if (studyTime && Number(studyTime) < 0) {
      message = "Nhap so gio lon hon khong";
    }
    if (name && (name.length < 3 || name.length > 5)) {
      message = "Nhap trong khoang 3-5 ky tu";
    }
    return message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate data
    const message = validateData();
    if (message) {
      toast.error(message);
      return;
    }
    try {
      // noi them id
      await axios.put("http://localhost:3000/courses", {
        name,
        studyTime,
        level,
      });
      toast.success("them thanh cong");
    } catch (error) {
      toast.error("Loi Call Api");
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Text input */}
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Thoi gian
          </label>
          <input
            value={studyTime}
            onChange={(e) => setStudyTime(e.target.value)}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Select */}
        <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Select - option
          </label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            id="selectOption"
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">Chuyen sau</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditPage;
