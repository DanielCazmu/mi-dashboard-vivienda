import React, { useEffect, useState } from 'react';
import { FaHome, FaFileAlt, FaMoneyBillWave, FaSolarPanel } from 'react-icons/fa';
import DynamicBarChart from './DynamicBarChart';

const financialData = [
  { categoria: 'Tasación', presupuestado: 300, gastado: 276.78 },
  { categoria: 'Honorarios', presupuestado: 250, gastado: 250 },
  { categoria: 'ITP', presupuestado: 6500, gastado: 0 },
  { categoria: 'Placas Solares', presupuestado: 8000, gastado: 0 },
];

export default function DashboardContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <FaHome className="mr-2" /> Información General
        </h2>
        <p>Superficie: 143 m²</p>
        <p>Parcela: 1.850 m²</p>
        <p>Ref. Catastral: 7201101PB4370S0009PW</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <FaFileAlt className="mr-2" /> Estado de Documentación
        </h2>
        <ul>
          <li>Certificado de Titularidad: Completado</li>
          <li>Notas de Afección Fiscal: Completado</li>
          <li>Consulta Catastral: Completado</li>
          <li>Informe Tasación: Pendiente</li>
          <li>Documentación ITP: Pendiente</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <FaMoneyBillWave className="mr-2" /> Control Financiero
        </h2>
        <DynamicBarChart data={financialData} />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <FaSolarPanel className="mr-2" /> Presupuestos Placas Solares
        </h2>
        <ul>
          <li>Iberdrola: 7.500€ (5kW, 25 años garantía)</li>
          <li>Cambio Energético: 8.000€ (5.5kW, 20 años garantía)</li>
          <li>Domo Electra: 7.800€ (5kW, 22 años garantía)</li>
        </ul>
      </div>
    </div>
  );
}