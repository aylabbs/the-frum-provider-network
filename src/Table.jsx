import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Table, Tag } from "antd";
const Tags = ({ values }) => {
  return (
    <div>
      {[
        <Tag>Hello</Tag>,
        <Tag>Hello</Tag>,
        <Tag>Hello</Tag>,
        <Tag>Hello</Tag>,
        <Tag>Hello</Tag>,
        <Tag>Hello</Tag>,
        <Tag>Hello</Tag>,
        <Tag>Hello</Tag>,
        <Tag>Hello</Tag>,
      ]}
    </div>
  );
};
const columns = [
  {
    title: "ID",
    ellipsis: true,
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id,
    width: 70,
  },
  {
    title: "First Name",
    ellipsis: true,
    dataIndex: "firstName",
    key: "firstName",
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    render: () => {
      return (
        <Tags
          values={[
            "Hello",
            "Hello",
            "Hello",
            "Hello",
            "Hello",
            "Hello",
            "Hello",
            "Hello",
          ]}
        />
      );
    },
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
  },
  {
    title: "Last Name",
    ellipsis: true,
    dataIndex: "lastName",
    key: "lastName",
    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
  },
  {
    title: "Email",
    ellipsis: true,
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: "Phone",
    ellipsis: true,
    dataIndex: "phone",
    key: "phone",
    sorter: (a, b) => a.phone.localeCompare(b.phone),
  },
  {
    title: "Address",
    ellipsis: true,
    dataIndex: "address",
    key: "address",
    sorter: (a, b) => a.address.localeCompare(b.address),
  },
  {
    title: "Created At",
    ellipsis: true,
    dataIndex: "createdAt",
    key: "createdAt",
    sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    render: (date) => new Date(date).toLocaleString(),
  },
  {
    title: "Updated At",
    ellipsis: true,
    dataIndex: "updatedAt",
    key: "updatedAt",
    sorter: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
    render: (date) => new Date(date).toLocaleString(),
  },
];
function MainTable({ height, width }) {
  const [data, setData] = useState({});
  const [tableHeight, setTableHeight] = useState(0);
  useEffect(() => {
    const headerHeight = Number(
      document.querySelector("thead")?.clientHeight ?? 0
    );
    setTableHeight(height - headerHeight);
  }, [height, width]);
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from the Netlify function
        const response = await fetch("/.netlify/functions/data");
        const _data = await response.json();
        setData(_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <Table
      dataSource={data?.contacts ?? []}
      columns={columns}
      size="small"
      virtual
      pagination={false}
      scroll={{
        x: width,
        y: tableHeight,
      }}
    />
  );
}

export default MainTable;
