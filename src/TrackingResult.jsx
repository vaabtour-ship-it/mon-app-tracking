import { useNavigate, useParams } from 'react-router-dom';
import { trackingData, trackingTranslations } from './data/trackingData';
import './App.css';

function TrackingResult() {
  const navigate = useNavigate();
  const { suiviId } = useParams();
  const currentLang = localStorage.getItem('appLang') || 'fr';
  
  // Récupération de l'ID (fallback si vide)
  const trackingNumber = suiviId || localStorage.getItem('trackingNumber') || "AT-74291-FR";
  const currentTracking = trackingData[trackingNumber];

  // Si non trouvé, gestion basique d'erreur
  if (!currentTracking) {
    return (
      <div className="app-container" style={{ color: '#fff', textAlign: 'center', marginTop: '50px' }}>
        <p>Numéro introuvable / Tracking not found</p>
        <button className="btn-suivre" onClick={() => navigate('/')}>Retour</button>
      </div>
    );
  }

  const brand = currentTracking.brand; // "Atelier Tuffery" ou "SPIDER"
  const isSpider = brand === "SPIDER";

  // Récupération des bonnes traductions associées à la marque
  const brandTranslations = trackingTranslations[brand] || trackingTranslations["Atelier Tuffery"];
  const t = brandTranslations[currentLang] || brandTranslations.fr;
  const currentStatus = currentTracking.status[currentLang] || currentTracking.status.fr;

  // --- CONFIGURATION DYNAMIQUE DU DESIGN ---
  const styles = {
    btnBack: isSpider ? {
      background: 'rgba(255, 0, 60, 0.1)', color: '#ff003c', border: '1px solid #ff003c',
      padding: '8px 16px', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase',
      letterSpacing: '1px', borderRadius: '4px', marginBottom: '15px', cursor: 'pointer'
    } : {
      background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.4)',
      padding: '8px 16px', fontSize: '14px', borderRadius: '4px', marginBottom: '10px'
    },
    card: isSpider ? {
      background: '#0d0d11', border: '1px solid rgba(255, 255, 255, 0.08)',
      borderTop: '4px solid #ff003c', borderRadius: '8px', padding: '35px',
      color: '#ffffff', boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
    } : {
      background: '#fcfbfa', borderTop: '5px solid #1a2a40', borderRadius: '12px',
      padding: '35px', color: '#1a1a1a', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    },
    titleBrand: isSpider ? {
      fontFamily: 'Impact, sans-serif', letterSpacing: '4px', textTransform: 'uppercase',
      fontSize: '26px', margin: '0 0 5px 0', color: '#ff003c'
    } : {
      fontFamily: 'serif', letterSpacing: '3px', textTransform: 'uppercase',
      fontSize: '20px', margin: '0 0 10px 0', color: '#1a2a40'
    },
    trackingNumBox: isSpider ? {
      background: '#16161f', color: '#ffffff', padding: '12px', borderRadius: '4px',
      fontWeight: 'bold', fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase',
      borderLeft: '4px solid #ff003c', marginBottom: '35px', textAlign: 'left'
    } : {
      background: '#f3ece5', color: '#7c533c', padding: '10px', borderRadius: '6px',
      fontWeight: '600', fontSize: '14px', letterSpacing: '1px', borderLeft: '3px solid #c8a27c',
      marginBottom: '30px'
    },
    progressBg: isSpider ? { background: '#22222b', height: '4px', borderRadius: '2px' } 
                          : { background: '#e0e5eb', height: '6px', borderRadius: '3px' },
    progressBar: isSpider ? { background: '#ff003c', width: currentTracking.progressWidth, borderRadius: '2px', boxShadow: '0 0 10px #ff003c' } 
                          : { background: '#1a2a40', width: currentTracking.progressWidth, borderRadius: '3px' },
    statusBox: isSpider ? {
      background: 'rgba(255, 255, 255, 0.03)', color: '#ffffff', border: '1px dashed rgba(255, 255, 255, 0.1)',
      borderRadius: '4px', padding: '16px', fontSize: '13px', lineHeight: '1.6', marginTop: '35px', textAlign: 'left'
    } : {
      background: '#eef2f6', color: '#1a2a40', border: 'none', borderRadius: '8px',
      padding: '16px', fontSize: '14px', lineHeight: '1.5', marginTop: '30px', textAlign: 'left'
    },
    primaryColor: isSpider ? '#ff003c' : '#1a2a40'
  };

  // Fonction utilitaire pour générer le style des cercles d'étape
  const getCircleStyle = (stepNumber) => {
    const isActive = currentTracking.currentStep >= stepNumber;
    if (isSpider) {
      return {
        background: '#ff003c', color: '#fff', border: 'none', 
        boxShadow: isActive ? '0 0 8px #ff003c' : 'none',
        opacity: isActive ? 1 : 0.3 // Optionnel : Spider baisse l'opacité si pas atteint
      };
    } else {
      return isActive 
        ? { background: '#1a2a40', color: '#fff', border: 'none' } 
        : { background: '#fff', color: '#ccc', border: '2px solid #e0e5eb' };
    }
  };

  return (
    <div className="app-container">
      <section id="center">
        
        {/* Bouton Retour Dynamique */}
        <div style={{ width: '100%', maxWidth: '650px', textAlign: 'left' }}>
          <button style={styles.btnBack} onClick={() => navigate('/')}>
            {t.back}
          </button>
        </div>

        {/* Carte Principale Dynamique */}
        <div className="tracking-card" style={styles.card}>
          
          {/* En-tête */}
          <div style={{ marginBottom: isSpider ? '35px' : '30px', textAlign: 'center' }}>
            <h2 style={styles.titleBrand}>{brand}</h2>
            {!isSpider && <div style={{ width: '40px', height: '1px', background: '#c8a27c', margin: '0 auto 15px' }}></div>}
            
            {isSpider ? (
              <p style={{ color: '#aaa', fontSize: '14px', letterSpacing: '0.5px', margin: '0' }}>{t.title}</p>
            ) : (
              <h3 style={{ fontSize: '24px', fontWeight: '500', margin: '0' }}>{t.title}</h3>
            )}
          </div>

          {/* Container Numéro de suivi */}
          <div className="tracking-number" style={styles.trackingNumBox}>
            {t.labelNum}{' '}
            <span style={{ 
              color: isSpider ? '#ff003c' : 'inherit', 
              fontFamily: 'monospace', 
              fontSize: '15px' 
            }}>
              {trackingNumber}
            </span>
          </div>

          {/* Barre de Progression */}
          <div className="progress" style={styles.progressBg}>
            <div className="progress-bar" style={styles.progressBar}></div>
          </div>

          {/* Étapes de l'expédition */}
          <div className="steps" style={{ marginTop: isSpider ? '30px' : '25px', listStyle: 'none', padding: '0' }}>
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="step" style={{ listStyleType: 'none' }}>
                <div className="circle" style={getCircleStyle(step)}>
                  {currentTracking.currentStep >= step ? "✓" : step}
                </div>
                <p style={{ 
                  fontWeight: currentTracking.currentStep === step || isSpider ? 'bold' : '400', 
                  color: isSpider ? '#ff003c' : (currentTracking.currentStep >= step ? '#1a2a40' : '#999'), 
                  fontSize: isSpider ? '12px' : '13px', 
                  marginTop: isSpider ? '10px' : '8px', 
                  textTransform: isSpider ? 'uppercase' : 'none' 
                }}>
                  {t[`step${step}`]}
                </p>
              </div>
            ))}
          </div>

          {/* Statut textuel final */}
          <div className="status" style={styles.statusBox}>
            {isSpider ? `⚡ ${currentStatus}` : currentStatus}
          </div>

        </div>
      </section>
    </div>
  );
}

export default TrackingResult;