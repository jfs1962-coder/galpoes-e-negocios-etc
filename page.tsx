"use client"
import { useState } from 'react'

export default function CadastrarImovel() {
  const [tipo, setTipo] = useState('Galpão')
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-2xl font-bold text-blue-900 mb-2">Anunciar meu Imóvel</h1>
      <p className="text-gray-600 mb-6">Só o proprietário cadastra. Consulta livre para todos.</p>

      <form className="space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Nome completo / Razão Social *" required />
        <input className="w-full border p-3 rounded" placeholder="CPF / CNPJ *" required />
        <input className="w-full border p-3 rounded" placeholder="Seu WhatsApp *" required />
        
        <label className="block font-semibold mt-4">E-mail para receber Nota Fiscal (NFS-e) *</label>
        <input type="email" className="w-full border p-3 rounded" placeholder="ex: financeiro@suaempresa.com.br" required />
        <small className="text-gray-500">É neste e-mail que você receberá a NFS-e, modelo Prefeitura Fortaleza.</small>

        <label className="block font-semibold mt-4">Tipo de Imóvel *</label>
        <select value={tipo} onChange={e => setTipo(e.target.value)} className="w-full border p-3 rounded">
          <option>Galpão</option>
          <option>Casa</option>
          <option>Apartamento</option>
          <option>Sobrado</option>
          <option>Prédio</option>
          <option>Terreno</option>
          <option>Outro</option>
        </select>

        <label className="block font-semibold mt-4">Comprovante de Propriedade (OPCIONAL - ganha selo Verificado)</label>
        <input type="file" className="w-full border p-3 rounded" />
        <small className="text-gray-500">Pode ser IPTU, conta de luz/água ou matrícula. Foto do celular mesmo.</small>

        <div className="bg-blue-50 p-4 rounded mt-6 border border-blue-200">
          <label className="flex gap-2">
            <input type="checkbox" required />
            <span className="text-sm">
              <b>Declaro e autorizo:</b> Declaro que sou proprietário legal deste IMÓVEL e autorizo o site Galpões e Negócios (galpoesenegocios.com.br) a divulgar meu imóvel até que eu solicite a baixa pelos botões VENDI / ALUGUEI / PAUSAR. 
              <a href="/regras" className="text-blue-600 underline ml-1">Ler regras</a>
            </span>
          </label>
        </div>

        <button className="w-full bg-blue-900 text-white p-4 rounded font-bold text-lg mt-6">
          CADASTRAR MEU IMÓVEL
        </button>
      </form>
    </div>
  )
}
