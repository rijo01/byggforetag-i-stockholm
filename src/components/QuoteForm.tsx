"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    area: "",
    description: "",
    budget: "",
  });

  const handleSubmit = () => {
    console.log("Quote request:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl text-gray-900 mb-2">Tack för din förfrågan!</h3>
        <p className="text-gray-600 text-sm">Vi matchar dig med kvalificerade byggföretag inom 24 timmar. Du får upp till 3 offerter att jämföra.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-green-600">Gratis &amp; utan förpliktelser</span>
      </div>
      <h3 className="font-display text-xl text-gray-900 mb-1">Få offerter från byggföretag</h3>
      <p className="text-sm text-gray-500 mb-6">Beskriv ditt projekt och få upp till 3 offerter från kvalitetssäkrade byggfirmor.</p>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Namn *</label>
            <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="Anna Svensson" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Telefon *</label>
            <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="070-123 45 67" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">E-post *</label>
          <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="anna@exempel.se" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Typ av projekt *</label>
            <select id="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white">
              <option value="">Välj projekttyp</option>
              <option value="badrumsrenovering">Badrumsrenovering</option>
              <option value="koksrenovering">Köksrenovering</option>
              <option value="tillbyggnad">Tillbyggnad</option>
              <option value="nybyggnation">Nybyggnation</option>
              <option value="fasadrenovering">Fasadrenovering</option>
              <option value="takrenovering">Takrenovering</option>
              <option value="totalrenovering">Totalrenovering</option>
              <option value="malning">Målning</option>
              <option value="golv">Golvläggning</option>
              <option value="el">Elarbeten</option>
              <option value="vvs">VVS</option>
              <option value="ovrigt">Övrigt</option>
            </select>
          </div>
          <div>
            <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1.5">Område *</label>
            <select id="area" value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white">
              <option value="">Välj område</option>
              <option value="sodermalm">Södermalm</option>
              <option value="ostermalm">Östermalm</option>
              <option value="norrmalm">Norrmalm</option>
              <option value="kungsholmen">Kungsholmen</option>
              <option value="vasastan">Vasastan</option>
              <option value="solna">Solna</option>
              <option value="sundbyberg">Sundbyberg</option>
              <option value="nacka">Nacka</option>
              <option value="lidingo">Lidingö</option>
              <option value="taby">Täby</option>
              <option value="huddinge">Huddinge</option>
              <option value="ovrigt">Övrigt Stockholmsområdet</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">Ungefärlig budget</label>
          <select id="budget" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white">
            <option value="">Välj budget</option>
            <option value="under-100k">Under 100 000 kr</option>
            <option value="100k-300k">100 000 – 300 000 kr</option>
            <option value="300k-500k">300 000 – 500 000 kr</option>
            <option value="500k-1m">500 000 – 1 000 000 kr</option>
            <option value="over-1m">Över 1 000 000 kr</option>
            <option value="vet-inte">Vet inte ännu</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">Beskriv ditt projekt *</label>
          <textarea id="description" rows={4} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none resize-none"
            placeholder="Beskriv vad du behöver hjälp med, storlek på projekt, eventuella önskemål..." />
        </div>

        <button type="button" onClick={handleSubmit}
          className="w-full px-8 py-3.5 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-all shadow-md hover:shadow-lg text-sm">
          Skicka offertförfrågan – Gratis
        </button>
        <p className="text-xs text-gray-400 text-center">Inga förpliktelser. Upp till 3 offerter inom 24h.</p>
      </div>
    </div>
  );
}
