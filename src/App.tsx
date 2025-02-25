import { CiSearch } from "react-icons/ci"
import Container from "./components/Container"
import Header from "./components/Header"
import Input from "./components/Input"
import Title from "./components/Title"
import Table from "./components/Table"
import Justify from "./components/Justify";
import { useEffect, useState } from "react"
import { fetchEmployees } from "./services/api"
import { formatDate, formatPhoneNumber } from "./utils/utils";
import { EmployeesProps } from "./components/Table"


export default function App() {

  const [employees, setEmployees] = useState<EmployeesProps[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getEmployees() {
      const response = await fetchEmployees();
      setEmployees(response.employees);
    }
    getEmployees();

  }, []);

  const filteredEmployees = employees.filter((employee) => {
    const searchLower = search.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchLower) ||
      employee.job.toLowerCase().includes(searchLower) ||
      formatDate(employee.admission_date).toLowerCase().includes(searchLower) ||
      formatPhoneNumber(employee.phone).toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <Header />
      <Container>
        <Justify>
          <Title title="Funcionários" />
          <Input
            value={search}
            placeholder="Pesquisar"
            type="text"
            icon={CiSearch}
            onChange={(e) => setSearch(e.target.value)}

          />
        </Justify>

        <Table employees={filteredEmployees} />

      </Container>
    </>
  )
}
