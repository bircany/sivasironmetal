import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import CorporateLayout from './layouts/CorporateLayout';
import ProductsLayout from './layouts/ProductsLayout';
import Home from './pages/Home';
import ProductList from './pages/products/ProductList';
import ProductDetail from './pages/products/ProductDetail';
import Contact from './pages/Contact';
import About from './pages/corporate/About';
import VisionMission from './pages/corporate/VisionMission';
import QualityCertificates from './pages/corporate/QualityCertificates';
import History from './pages/corporate/History';
import SidebarLayout from './layouts/SidebarLayout';
import GenericPage from './pages/GenericPage';
import { Navigate } from 'react-router-dom';
import { PieChart, TrendingUp, BarChart3, FileText, Leaf, Award, Users } from 'lucide-react';
import Production from './pages/Production';
import Services from './pages/Services';
import References from './pages/References';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="kurumsal" element={<CorporateLayout />}>
            <Route index element={<Navigate to="hakkimizda" replace />} />
            <Route path="hakkimizda" element={<About />} />
            <Route path="vizyon-misyon" element={<VisionMission />} />
            <Route path="kalite-politikamiz" element={<QualityCertificates />} />
            <Route path="tarihce" element={<History />} />
          </Route>

          <Route path="urunlerimiz" element={<ProductsLayout />}>
            <Route index element={<ProductList />} />
            <Route path="kategori/:categoryId" element={<ProductList />} />
            <Route path="detay/:productId" element={<ProductDetail />} />
          </Route>
          
          <Route path="referanslar" element={<References />} />
          {/* Investor Relations */}
          <Route
            path="yatirimci-iliskileri"
            element={
              <SidebarLayout
                titleKey="nav.investor"
                translationNamespace="investor.menu"
                menuItems={[
                  { key: 'general', path: '/yatirimci-iliskileri/genel-bilgiler', icon: PieChart },
                  { key: 'financial', path: '/yatirimci-iliskileri/finansal-veriler', icon: TrendingUp },
                  { key: 'stock', path: '/yatirimci-iliskileri/hisse-bilgileri', icon: BarChart3 },
                  { key: 'reports', path: '/yatirimci-iliskileri/faaliyet-raporlari', icon: FileText },
                ]}
              />
            }
          >
            <Route index element={<Navigate to="genel-bilgiler" replace />} />
            <Route path="genel-bilgiler" element={<GenericPage titleKey="investor.general.title" contentKey="investor.general.content" />} />
            <Route path="finansal-veriler" element={<GenericPage titleKey="investor.financial.title" contentKey="investor.financial.content" />} />
            <Route path="hisse-bilgileri" element={<GenericPage titleKey="investor.stock.title" contentKey="investor.stock.content" />} />
            <Route path="faaliyet-raporlari" element={<GenericPage titleKey="investor.reports.title" contentKey="investor.reports.content" />} />
          </Route>

          {/* Sustainability */}
          <Route
            path="surdurulebilirlik"
            element={
              <SidebarLayout
                titleKey="nav.sustainability"
                translationNamespace="sustainability.menu"
                menuItems={[
                  { key: 'policy', path: '/surdurulebilirlik/cevre-politikasi', icon: Leaf },
                  { key: 'certificates', path: '/surdurulebilirlik/sertifikalar', icon: Award },
                  { key: 'social', path: '/surdurulebilirlik/sosyal-sorumluluk', icon: Users },
                ]}
              />
            }
          >
            <Route index element={<Navigate to="cevre-politikasi" replace />} />
            <Route path="cevre-politikasi" element={<GenericPage titleKey="sustainability.policy.title" contentKey="sustainability.policy.content" />} />
            <Route path="sertifikalar" element={<GenericPage titleKey="sustainability.certificates.title" contentKey="sustainability.certificates.content" />} />
            <Route path="sosyal-sorumluluk" element={<GenericPage titleKey="sustainability.social.title" contentKey="sustainability.social.content" />} />
          </Route>

          {/* Media */}
          <Route
            path="medya"
            element={
              <SidebarLayout
                titleKey="nav.media"
                translationNamespace="media.menu"
                menuItems={[
                  { key: 'news', path: '/medya/haberler', icon: FileText },
                  { key: 'press', path: '/medya/basin-bultenleri', icon: FileText },
                  { key: 'gallery', path: '/medya/galeri', icon: FileText },
                ]}
              />
            }
          >
            <Route index element={<Navigate to="haberler" replace />} />
            <Route path="haberler" element={<GenericPage titleKey="media.news.title" contentKey="media.news.content" />} />
            <Route path="basin-bultenleri" element={<GenericPage titleKey="media.press.title" contentKey="media.press.content" />} />
            <Route path="galeri" element={<GenericPage titleKey="media.gallery.title" contentKey="media.gallery.content" />} />
          </Route>

          {/* Career */}
          <Route
            path="kariyer"
            element={
              <SidebarLayout
                titleKey="nav.career"
                translationNamespace="career.menu"
                menuItems={[
                  { key: 'policy', path: '/kariyer/ik-politikamiz', icon: Users },
                  { key: 'positions', path: '/kariyer/acik-pozisyonlar', icon: Users },
                  { key: 'application', path: '/kariyer/is-basvuru-formu', icon: FileText },
                ]}
              />
            }
          >
            <Route index element={<Navigate to="ik-politikamiz" replace />} />
            <Route path="ik-politikamiz" element={<GenericPage titleKey="career.policy.title" contentKey="career.policy.content" />} />
            <Route path="acik-pozisyonlar" element={<GenericPage titleKey="career.positions.title" contentKey="career.positions.content" />} />
            <Route path="is-basvuru-formu" element={<GenericPage titleKey="career.application.title" contentKey="career.application.content" />} />
          </Route>

          <Route path="uretim" element={<Production />} />
          <Route path="hizmetler" element={<Services />} />
          <Route path="iletisim" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
