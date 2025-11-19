import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import ReviewWorkflow from "@/components/ReviewWorkflow";
import EvidenceUpload from "@/components/EvidenceUpload";
import AuditTrail from "@/components/AuditTrail";
import ReportSubmission from "@/components/ReportSubmission";
import Layout from "@/components/Layout";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/dashboard/review"
            element={
              <Layout>
                <ReviewWorkflow />
              </Layout>
            }
          />
          <Route
            path="/dashboard/evidence"
            element={
              <Layout>
                <EvidenceUpload />
              </Layout>
            }
          />
          <Route
            path="/dashboard/audit"
            element={
              <Layout>
                <AuditTrail />
              </Layout>
            }
          />
          <Route
            path="/dashboard/reports"
            element={
              <Layout>
                <ReportSubmission />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
