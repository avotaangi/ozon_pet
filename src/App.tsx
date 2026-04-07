import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { CatalogPage } from './pages/CatalogPage'
import { BreedProfilesPage } from './pages/BreedProfilesPage'
import { EcosystemPage } from './pages/EcosystemPage'
import { LoginPage } from './pages/LoginPage'
import { MarketplaceHomePage } from './pages/MarketplaceHomePage'
import { PetBlogPage } from './pages/PetBlogPage'
import { PetIdPage } from './pages/PetIdPage'
import { PetDobroPage } from './pages/PetDobroPage'
import { PetClickPage } from './pages/PetClickPage'
import { PetProPage } from './pages/PetProPage'
import { PetSubscriptionPage } from './pages/PetSubscriptionPage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceBookingPage } from './pages/ServiceBookingPage'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppShell>
            <MarketplaceHomePage />
          </AppShell>
        }
      />
      <Route
        path="/catalog"
        element={
          <AppShell>
            <CatalogPage />
          </AppShell>
        }
      />
      <Route
        path="/services"
        element={
          <AppShell>
            <ServicesPage />
          </AppShell>
        }
      />
      <Route
        path="/booking/:kind/:itemId"
        element={
          <AppShell>
            <ServiceBookingPage />
          </AppShell>
        }
      />
      <Route
        path="/login"
        element={
          <AppShell>
            <LoginPage />
          </AppShell>
        }
      />
      <Route
        path="/pet-click"
        element={
          <AppShell>
            <PetClickPage />
          </AppShell>
        }
      />
      <Route
        path="/petpro"
        element={
          <AppShell>
            <PetProPage />
          </AppShell>
        }
      />
      <Route
        path="/pet-id"
        element={
          <AppShell>
            <PetIdPage />
          </AppShell>
        }
      />
      <Route
        path="/pet-id/:petId"
        element={
          <AppShell>
            <PetIdPage />
          </AppShell>
        }
      />
      <Route
        path="/pet-id/:petId/community"
        element={
          <AppShell>
            <BreedProfilesPage />
          </AppShell>
        }
      />
      <Route
        path="/pet-dobro"
        element={
          <AppShell>
            <PetDobroPage />
          </AppShell>
        }
      />
      <Route
        path="/pet-dobro/:profileSlug/campaigns"
        element={
          <AppShell>
            <PetDobroPage />
          </AppShell>
        }
      />
      <Route
        path="/pet-dobro/:profileSlug"
        element={
          <AppShell>
            <PetDobroPage />
          </AppShell>
        }
      />
      <Route
        path="/pet-blog"
        element={
          <AppShell>
            <PetBlogPage />
          </AppShell>
        }
      />
      <Route
        path="/pet-subscription"
        element={
          <AppShell>
            <PetSubscriptionPage />
          </AppShell>
        }
      />
      <Route
        path="/ecosystem"
        element={<EcosystemPage />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
