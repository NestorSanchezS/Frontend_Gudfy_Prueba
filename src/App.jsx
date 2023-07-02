import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "@material-ui/core";
import CustomAppBar from "./components/CustomAppBar";
import "./App.css";
import { Count } from "./pages/Count";
import Tasks from "./pages/Tasks";
import { ReverseOrder } from "./pages/ReverseOrder";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={
            <CustomAppBar>
              <Container style={{ marginTop: "20px" }}>
                <Count />
              </Container>
            </CustomAppBar>
          }
        />
        <Route
          path="/task"
          element={
            <CustomAppBar>
              <Container style={{ marginTop: "20px" }}>
                <Tasks />
              </Container>
            </CustomAppBar>
          }
        />
        <Route
          path="/reverse"
          element={
            <CustomAppBar>
              <Container style={{ marginTop: "20px" }}>
                <ReverseOrder />
              </Container>
            </CustomAppBar>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
