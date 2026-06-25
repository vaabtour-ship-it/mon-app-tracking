// src/TrackingResult.jsx
import { useNavigate, useParams } from 'react-router-dom';
import { trackingData, brandStyles } from './data/mockdata';
import { globalTranslations } from './data/translations'; // <-- On importe le nouveau fichier de traduction !
import './App.css';

function TrackingResult() {
  const navigate = useNavigate();
  const { suiviId } = useParams();
  const currentLang = localStorage.getItem('appLang') || 'fr';
  
  const trackingNumber = suiviId || localStorage.getItem('trackingNumber');
  const currentTracking = trackingData[trackingNumber];

  if (!currentTracking) {
    return (
      <div className="app-container" style={{ color: '#fff', textAlign: 'center', marginTop: '50px' }}>
        <p>Numéro introuvable / Tracking not found</p>
        <button className="btn-suivre" onClick={() => navigate('/')}>
          ← Retour à la recherche
        </button>
      </div>
    );
  }

  const brand = currentTracking.brand;
  const ui = brandStyles[brand] || brandStyles["Atelier Tuffery"];
  
  // On récupère les traductions globales et uniques selon la langue (plus du tout par marque !)
  const t = globalTranslations[currentLang] || globalTranslations.fr;
  const currentStatus = currentTracking.status[currentLang] || currentTracking.status.fr;

  // --- STYLES DYNAMIQUES ---
  const styles = {
    btnBack: ui.isSpider ? {
      background: 'rgba(255, 0, 60, 0.1)', color: ui.primaryColor, border: `1px solid ${ui.primaryColor}`,
      padding: '8px 16px', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase',
      letterSpacing: '1px', borderRadius: '4px', marginBottom: '15px', cursor: 'pointer'
    } : {
      background: 'transparent', color: 'var(--text-color, #1a2a40)', border: '1px solid rgba(0,0,0,0.2)',
      padding: '8px 16px', fontSize: '14px', borderRadius: '4px', marginBottom: '15px', cursor: 'pointer'
    },
    card: {
      background: ui.cardBg, borderTop: ui.cardBorderTop, borderRadius: ui.isSpider ? '8px' : '12px',
      padding: '35px', color: ui.textColor, boxShadow: ui.isSpider ? '0 20px 40px rgba(0,0,0,0.6)' : '0 10px 30px rgba(0,0,0,0.1)'
    },
    titleBrand: {
      fontFamily: ui.fontFamily, letterSpacing: ui.isSpider ? '4px' : '3px', textTransform: 'uppercase',
      fontSize: ui.isSpider ? '26px' : '20px', margin: ui.isSpider ? '0 0 5px 0' : '0 0 10px 0', color: ui.primaryColor
    },
    trackingNumBox: {
      background: ui.numBoxBg, color: ui.numBoxColor, padding: ui.isSpider ? '12px' : '10px', 
      borderRadius: ui.isSpider ? '4px' : '6px', fontWeight: ui.isSpider ? 'bold' : '600', fontSize: '14px', 
      letterSpacing: '1px', borderLeft: ui.numBoxBorder, marginBottom: ui.isSpider ? '35px' : '30px', textAlign: 'left'
    },
    progressBg: { background: ui.progressBg, height: ui.progressHeight, borderRadius: '3px' },
    progressBar: { 
      background: ui.primaryColor, width: currentTracking.progressWidth, borderRadius: '3px', 
      boxShadow: ui.isSpider ? `0 0 10px ${ui.primaryColor}` : 'none' 
    },
    statusBox: {
      background: ui.statusBg, color: ui.statusTextColor, border: ui.statusBorder,
      borderRadius: ui.isSpider ? '4px' : '8px', padding: '16px', fontSize: '14px', lineHeight: '1.5', marginTop: ui.isSpider ? '35px' : '30px', textAlign: 'left'
    }
  };

  const getCircleStyle = (stepNumber) => {
    const isActive = currentTracking.currentStep >= stepNumber;
    if (ui.isSpider) {
      return {
        background: ui.primaryColor, color: '#fff', border: 'none', 
        boxShadow: isActive ? `0 0 8px ${ui.primaryColor}` : 'none',
        opacity: isActive ? 1 : 0.2
      };
    } else {
      return isActive 
        ? { background: ui.primaryColor, color: '#fff', border: 'none' } 
        : { background: '#fff', color: '#ccc', border: `2px solid ${ui.progressBg}` };
    }
  };

  return (
    <div className="app-container">
      <section id="center">
        
        <div style={{ width: '100%', maxWidth: '650px', textAlign: 'left' }}>
          <button style={styles.btnBack} onClick={() => navigate('/')}>
            {t.back}
          </button>
        </div>

        <div className="tracking-card" style={styles.card}>
          
          <div style={{ marginBottom: ui.isSpider ? '35px' : '30px', textAlign: 'center' }}>
            <h2 style={styles.titleBrand}>{brand}</h2>
            {!ui.isSpider && <div style={{ width: '40px', height: '1px', background: ui.secondaryColor, margin: '0 auto 15px' }}></div>}
            <p style={{ color: ui.isSpider ? '#aaa' : '#1a2a40', fontSize: '14px', margin: '0' }}>{t.title}</p>
          </div>

          <div className="tracking-number" style={styles.trackingNumBox}>
            {t.labelNum}{' '}
            <span style={{ color: ui.isSpider ? ui.primaryColor : 'inherit', fontFamily: 'monospace', fontSize: '15px' }}>
              {trackingNumber}
            </span>
          </div>

          <div className="progress" style={styles.progressBg}>
            <div className="progress-bar" style={styles.progressBar}></div>
          </div>

          <div className="steps" style={{ marginTop: ui.isSpider ? '30px' : '25px', listStyle: 'none', padding: '0' }}>
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="step" style={{ listStyleType: 'none' }}>
                <div className="circle" style={getCircleStyle(step)}>
                  {currentTracking.currentStep >= step ? "✓" : step}
                </div>
                <p style={{ 
                  fontWeight: currentTracking.currentStep === step || ui.isSpider ? 'bold' : '400', 
                  color: ui.isSpider ? ui.primaryColor : (currentTracking.currentStep >= step ? ui.primaryColor : '#999'), 
                  fontSize: '13px', marginTop: '8px', textTransform: ui.isSpider ? 'uppercase' : 'none' 
                }}>
                  {t[`step${step}`]}
                </p>
              </div>
            ))}
          </div>

          <div className="status" style={styles.statusBox}>
            {ui.statusIcon}{currentStatus}
          </div>

        </div>
      </section>
    </div>
  );
}

export default TrackingResult;