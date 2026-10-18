// PUMPD 12-Week Transformation Engine & Gym Tracker
// Built specifically for 94.5 kg -> 85 kg goal with 8:30 PM routine & Exercise Form Demonstrations

// ----------------------------------------------------
// 1. DATA STRUCTURES & EXERCISE REPOSITORY
// ----------------------------------------------------
const makeExercise = (id, name, sets, minReps, maxReps, rest, equipment, primaryMuscle, cues, options = {}) => ({
  id, name, sets, minReps, maxReps, rest, equipment, primaryMuscle, cues, ...options
});

const WORKOUT_DAYS = [
  {
    id: 'sun', name: 'Sunday', title: 'Rest & Full Recovery', subtitle: 'Central nervous system & muscle rebuild', badge: 'Rest',
    time: 'Recovery', muscles: [], warmup: 'No lifting today. Muscle protein synthesis and recovery accelerate during deep rest.',
    cardio: 'Optional: 20–30 min relaxed recovery walk for active blood flow and lymphatic drainage.',
    exercises: []
  },
  {
    id: 'mon', name: 'Monday', title: 'Upper Body', subtitle: 'Incline Bench, Flyes, Pull-Up Progression, Pendlay Rows & Arms', badge: 'Upper Body',
    time: '8:30 PM • 75–90 min', muscles: [{ id: 'chest', role: 'Primary' }, { id: 'lats', role: 'Primary' }, { id: 'back', role: 'Primary' }, { id: 'shoulders', role: 'Secondary' }, { id: 'triceps', role: 'Secondary' }, { id: 'biceps', role: 'Secondary' }],
    warmup: '5–8 min easy bike + dynamic shoulder mobility + 2–3 progressive warm-up sets for Incline Barbell Press.',
    cardio: 'Optional: 10–15 min post-workout stationary bike or brisk incline walk (conversational pace).',
    exercises: [
      makeExercise('ex_incline_barbell_press', 'Incline Barbell Bench Press', 3, 6, 8, 150, 'Barbell + 15–30° Incline Bench', 'chest', 'Jeff Nippard: 15–30° incline. Scapulae retracted, 2–3s controlled descent touching upper chest below collarbone. Drive up without excessive elbow flare.', { demoId: 'ex_incline_barbell_press' }),
      makeExercise('ex_seated_cable_fly', 'Seated Cable Fly / Pec Deck', 2, 10, 12, 90, 'Cable Station / Pec Deck', 'chest', 'Jeff Nippard: Handles at mid-chest level. Keep shoulders pinned back to pad. Pause 1s in deep lengthened stretch, squeeze inner chest across.', { demoId: 'ex_pec_deck_fly' }),
      makeExercise('ex_lat_pulldown_prog', 'Lat Pulldown (Pull-Up Progression)', 3, 6, 8, 120, 'Lat Pulldown Station', 'lats', 'Jeff Nippard: Pull-up strength builder! Torso slight 10–15° lean. Depress scapulae, drive elbows into hip pockets. Slow 2–3s negative to full stretch.', { demoId: 'ex_lat_pulldown' }),
      makeExercise('ex_cable_lateral_raise_mon', 'High Cable / DB Lateral Raise', 2, 8, 10, 75, 'Functional Trainer / DBs', 'shoulders', 'Jeff Nippard: Pulley at hip height. Scoop the weight outward 20° forward in scapular plane. Controlled lowering phase.', { demoId: 'ex_cable_lateral_raise' }),
      makeExercise('ex_pendlay_row', 'Pendlay Row', 2, 8, 10, 120, 'Barbell + Plates', 'back', 'Jeff Nippard: Torso strictly parallel to floor, neutral spine, dead stop on floor every rep. Explosively pull bar to lower sternum without hip heave.', { demoId: 'ex_pendlay_row' }),
      makeExercise('ex_overhead_cable_triceps', 'Cable Overhead Triceps Extension', 2, 8, 10, 75, 'Cable Station + Rope', 'triceps', 'Jeff Nippard: Lengthened long-head overload. Lean forward 30°, let rope stretch behind head, lock out forearms under control.', { demoId: 'ex_overhead_triceps_ext' }),
      makeExercise('ex_bayesian_preacher_curl', 'Bayesian Curl / Preacher Curl', 2, 8, 10, 75, 'Cable Pulley or Preacher Bench', 'biceps', 'Jeff Nippard: Face away from low cable with shoulder extended behind torso (Bayesian) or preacher bench. Keep upper arm stable, curl with zero shoulder momentum.', { demoId: 'ex_bayesian_curl' })
    ]
  },
  {
    id: 'tue', name: 'Tuesday', title: 'Lower Body (Legs 1)', subtitle: 'Seated Curl, Smith Squat, RDL, Extension & Calves', badge: 'Legs 1',
    time: '8:30 PM • 75–90 min', muscles: [{ id: 'hamstrings', role: 'Primary' }, { id: 'quadriceps', role: 'Primary' }, { id: 'calves', role: 'Secondary' }],
    warmup: '5–8 min easy bike + leg swings + warm-up sets on Seated Leg Curl.',
    cardio: 'Keep cardio minimal today to allow full lower-body recovery and intense lifting.',
    exercises: [
      makeExercise('ex_seated_leg_curl', 'Seated Leg Curl', 3, 10, 15, 90, 'Seated Leg Curl Machine', 'hamstrings', 'Jeff Nippard: Pre-exhaust hamstrings! Hinge torso slightly forward for deeper stretch. Curl smoothly, pause at peak, 2–3s controlled eccentric.', { demoId: 'ex_seated_leg_curl' }),
      makeExercise('ex_smith_squat', 'Smith Machine Squat', 3, 5, 10, 150, 'Smith Machine', 'quadriceps', 'Jeff Nippard: Feet 3–6 inches forward from bar line for upright torso & maximum quad loading. Deep knee flexion; LAST SET TO FAILURE.', { demoId: 'ex_smith_squat' }),
      makeExercise('ex_rdl_tue', 'Romanian Deadlift (RDL)', 3, 5, 10, 120, 'Barbell / DBs + Straps', 'hamstrings', 'Jeff Nippard: Use straps. Soft knee bend, push hips straight back to wall. Keep bar glued to shins, flat back throughout; stop once hips stop traveling back.', { demoId: 'ex_db_rdl' }),
      makeExercise('ex_leg_ext_tue', 'Leg Extension', 3, 10, 15, 75, 'Leg Extension Machine', 'quadriceps', 'Jeff Nippard: Set seat backrest back to stretch rectus femoris. Grip handles tight to anchor pelvis. Squeeze quads hard at peak.', { demoId: 'ex_leg_extension' }),
      makeExercise('ex_standing_calf_raise', 'Standing Calf Raise', 4, 10, 15, 60, 'Smith Machine or Dumbbells', 'calves', 'Jeff Nippard: Lower into full stretch and PAUSE 1–2s at bottom to eliminate tendon bounce. Drive through big toes to peak height.', { demoId: 'ex_standing_calf_raise' })
    ]
  },
  {
    id: 'wed', name: 'Wednesday', title: 'Mid-Week Rest & Recovery', subtitle: 'Central nervous system reset & muscle glycogen refill', badge: 'Rest',
    time: 'Recovery', muscles: [], warmup: 'Rest day! Muscle tissue repairs and grows during quality recovery.',
    cardio: '20–30 min leisurely walk, mobility stretches, and maintain 150g+ protein target.',
    exercises: []
  },
  {
    id: 'thu', name: 'Thursday', title: 'Push', subtitle: 'Paused Bench, Shoulder Press, Pec Deck & Triceps', badge: 'Push Day',
    time: '8:30 PM • 75–90 min', muscles: [{ id: 'chest', role: 'Primary' }, { id: 'shoulders', role: 'Primary' }, { id: 'triceps', role: 'Secondary' }],
    warmup: '5–8 min easy bike + band pull-aparts + gradual Bench Press warm-up sets.',
    cardio: 'Optional 10 min cool-down walking.',
    exercises: [
      makeExercise('ex_barbell_bench', 'Barbell Flat Bench Press', 3, 8, 10, 150, 'Bench Press Station + Barbell', 'chest', 'Jeff Nippard: Modest arch, shoulder blades pinched. Lower with 2s control and PAUSE 1 full second on lower chest before explosive press.', { demoId: 'ex_barbell_bench' }),
      makeExercise('ex_plate_shoulder_press', 'Machine Shoulder Press', 3, 10, 12, 120, 'Plate-Loaded / Selectorized Press', 'shoulders', 'Jeff Nippard: Handles at chin height. Keep elbows tucked forward ~30° in scapular plane (not flared 90°). Press overhead smoothly.', { demoId: 'ex_plate_shoulder_press' }),
      makeExercise('ex_pec_deck', 'Pec Deck Fly', 3, 15, 20, 75, 'Pec Deck Machine', 'chest', 'Jeff Nippard: Set arms for deep comfortable chest stretch without rolling shoulders forward. Keep chest proud, sweep handles forward.', { demoId: 'ex_pec_deck_fly' }),
      makeExercise('ex_cable_lat_raise_thu', 'Cable Lateral Raise', 3, 10, 15, 75, 'Functional Trainer + Handle', 'shoulders', 'Jeff Nippard: Pulley at hip height. Scoop weight outward away from body in scapular plane (~20° forward). 2s eccentric descent.', { demoId: 'ex_cable_lateral_raise' }),
      makeExercise('ex_overhead_cable_ext_thu', 'Overhead Cable Triceps Extension', 3, 5, 10, 90, 'Cable Station + Rope', 'triceps', 'Jeff Nippard: Heavy overload (5–10 reps). Lean forward, let rope sink behind head for deep stretch, extend forearms cleanly.', { demoId: 'ex_overhead_triceps_ext' }),
      makeExercise('ex_tricep_cable_kickback', 'Triceps Cable Kickback', 3, 10, 15, 60, 'Cable Station (no handle/cuff)', 'triceps', 'Jeff Nippard: Cable at hip height. Hinge forward 45°, pin upper arm parallel to torso. Extend forearm back into peak contraction; hold 1s.', { demoId: 'ex_cable_kickback' })
    ]
  },
  {
    id: 'fri', name: 'Friday', title: 'Legs (Legs 2)', subtitle: 'High-Intensity Quads, RDL, Hip Thrust & Leg Press', badge: 'Legs 2',
    time: '8:30 PM • 75–90 min', muscles: [{ id: 'quadriceps', role: 'Primary' }, { id: 'hamstrings', role: 'Primary' }, { id: 'glutes', role: 'Primary' }, { id: 'calves', role: 'Secondary' }],
    warmup: '5–8 min easy bike + hip opener dynamic stretches.',
    cardio: 'None scheduled: prioritize maximal intensity on designated failure sets.',
    exercises: [
      makeExercise('ex_leg_ext_fri', 'Leg Extension', 2, 8, 10, 90, 'Leg Extension Machine', 'quadriceps', 'Jeff Nippard: Lean seat back for bigger quad stretch. Focus entirely on squeezing quads to move the weight. BOTH SETS TO ABSOLUTE FAILURE.', { demoId: 'ex_leg_extension' }),
      makeExercise('ex_barbell_rdl_fri', 'Barbell Romanian Deadlift (RDL)', 2, 6, 8, 120, 'Barbell + Plates + Straps', 'hamstrings', 'Jeff Nippard: Push hips back and lower bar straight down centered over mid-foot. Flat back the entire time; drive hips forward at top.', { demoId: 'ex_db_rdl' }),
      makeExercise('ex_hip_thrust_fri', 'Barbell Hip Thrust', 2, 6, 8, 120, 'Barbell + Flat Bench', 'glutes', 'Jeff Nippard: Bench just below shoulder blades, shins vertical. Squeeze glutes hard at lockout with posterior pelvic tilt; LAST SET TO FAILURE.', { demoId: 'ex_hip_thrust' }),
      makeExercise('ex_leg_press_fri', '45° Leg Press', 1, 6, 8, 150, '45-Degree Leg Press', 'quadriceps', 'Jeff Nippard: Single all-out top set! Feet middle of sled. Deep controlled knee flexion without lower back lifting off pad. TRY TILL FAILURE.', { demoId: 'ex_leg_press' }),
      makeExercise('ex_standing_db_calf_fri', 'Standing Dumbbell Calf Raise', 2, 8, 10, 60, 'Heavy Dumbbells + Step', 'calves', 'Jeff Nippard: Hold heavy dumbbells. Pause for 2 full seconds in the deep bottom stretch on every rep to eliminate elasticity.', { demoId: 'ex_standing_calf_raise' })
    ]
  },
  {
    id: 'sat', name: 'Saturday', title: 'Pull', subtitle: 'Close-Grip Lat, Chest-Supported Row, Rear Delts, Shrugs & Curls', badge: 'Pull Day',
    time: '8:30 PM • 75–90 min', muscles: [{ id: 'lats', role: 'Primary' }, { id: 'back', role: 'Primary' }, { id: 'rear-shoulders', role: 'Secondary' }, { id: 'biceps', role: 'Secondary' }],
    warmup: '5–8 min easy bike + light pulldown and row warm-up sets.',
    cardio: 'Optional: 10–15 min brisk incline treadmill walk.',
    exercises: [
      makeExercise('ex_close_grip_lat_pulldown', 'Close-Grip Lat Pulldown', 3, 10, 15, 100, 'Lat Pulldown + V-Grip/Neutral', 'lats', 'Jeff Nippard: Torso nearly vertical at top for maximum stretch. Drive elbows down tight to sides directly into hip pockets.', { demoId: 'ex_close_grip_lat_pulldown' }),
      makeExercise('ex_incline_chest_supp_row', 'Incline Chest-Supported DB Row', 3, 10, 12, 90, '30–45° Incline Bench + DBs', 'back', 'Jeff Nippard: Proper machine row replacement! Bench at 30–45°. Flare elbows 45–60° and pinch shoulder blades together at top for 1s.', { demoId: 'ex_chest_supp_row' }),
      makeExercise('ex_close_grip_cable_row', 'Close-Grip Seated Cable Row', 2, 15, 20, 75, 'Seated Cable Row + V-Grip', 'lats', 'Jeff Nippard: Sit upright with tall posture. Let shoulders protract slightly at stretch; pull to navel keeping elbows close to ribcage.', { demoId: 'ex_seated_cable_row' }),
      makeExercise('ex_reverse_cable_fly', 'Reverse Cable Fly', 3, 15, 20, 60, 'Functional Trainer (Eye Level)', 'rear-shoulders', 'Jeff Nippard: Hold cable balls without handles. Light weight, high reps (15–20) so mid-traps do not take over. Wide horizontal arc.', { demoId: 'ex_cable_rear_delt_fly' }),
      makeExercise('ex_shrugs_pull', 'Dumbbell / Trap-Bar Shrugs', 4, 15, 20, 60, 'Dumbbells or Trap/Hex Bar', 'traps', 'Jeff Nippard: Shrug machine replacement! Lean torso forward ~10° to align with upper trap fibers. Shrug up and back; pause 1–2s at peak.', { demoId: 'ex_shrugs' }),
      makeExercise('ex_ez_bar_curl', 'EZ-Bar Curl', 3, 10, 15, 75, 'EZ Curl Bar + Plates', 'biceps', 'Jeff Nippard: Semi-supinated grip on EZ bar protects wrists while maximizing bicep tension. Pin elbows to ribs; zero torso swing.', { demoId: 'ex_ez_bar_curl' }),
      makeExercise('ex_preacher_curl_sat', 'Preacher Curl (Machine or EZ-Bar/DB)', 3, 15, 20, 60, 'Preacher Bench + EZ-Bar / DBs or Machine', 'biceps', 'Jeff Nippard: Targets bicep short head with strict isolation. Armpits snug against pad. Curl smoothly and control the 2–3s descent.', { demoId: 'ex_ez_preacher_curl' })
    ]
  }
];

// ----------------------------------------------------
// 3. STATE MANAGEMENT & LOCAL STORAGE
// ----------------------------------------------------
const STORAGE_KEYS = {
  LOGS: 'pumpd_workout_logs_v2',
  WEIGH_INS: 'pumpd_weigh_ins_v2',
  WAIST: 'pumpd_waist_logs_v2',
  PROTEIN: 'pumpd_protein_logs_v2',
  WATER: 'pumpd_water_logs_v2',
  SLEEP: 'pumpd_sleep_logs_v2',
  SETTINGS: 'pumpd_settings_v2',
  TODAY_CHECKLIST: 'pumpd_today_checklist_v2',
  DELOAD: 'pumpd_deload_v2',
  ACTIVE_DRAFT: 'pumpd_active_session_draft_v2',
  DIET_LOGS: 'pumpd_diet_logs_v1',
  DIET_CUSTOM_FOODS: 'pumpd_diet_custom_foods_v1',
  LAST_TAB: 'pumpd_last_active_tab_v2',
  REST_TARGET: 'pumpd_rest_timer_target_v2'
};

function getExerciseTargetText(ex, setsCount = ex.sets) {
  if (ex.trackType === 'run') return ex.target || `${ex.minDuration}–${ex.maxDuration} minutes`;
  if (ex.trackType === 'hold') return `${setsCount} sets × ${ex.target || `${ex.minReps}–${ex.maxReps} seconds`}`;
  return `${setsCount} sets × ${ex.minReps}–${ex.maxReps}${ex.isPerLeg ? ' per side' : ''} reps`;
}

function hasLoggedSetValue(set) {
  return Boolean(set?.completed || ['weight', 'reps', 'duration', 'durationLeft', 'durationRight', 'distance'].some(key => set?.[key] !== '' && set?.[key] !== undefined && set?.[key] !== null));
}

// ----------------------------------------------------
// 4. APPLICATION STATE & PERSISTENCE
// ----------------------------------------------------
const AppState = {
  activeNav: 'dashboard',
  currentDayId: getTodayDayId(),
  programDayId: getTodayDayId(),
  isDeload: false,
  timerInterval: null,
  timerRemaining: 0,
  timerTotal: 0,
  timerContext: 'Rest between sets',
  warmupInterval: null,
  warmupRemaining: 480,
  warmupRunning: false,
  cardioInterval: null,
  cardioRemaining: 720,
  cardioRunning: false,
  audioCtx: null,
  waterLogged: 0
};

function getTodayDayId() {
  const dayIndex = new Date().getDay();
  const map = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  return map[dayIndex] || 'mon';
}

function loadStorage(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveStorage(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
}

// ----------------------------------------------------
// 4A. ICON SYSTEM (inline SVG — replaces all emoji)
// ----------------------------------------------------
// Single consistent stroke-icon set so the UI no longer depends on
// OS emoji rendering. Colour is inherited via currentColor.
const ICONS = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  timer: '<path d="M10 2h4"/><path d="M12 14l3-3"/><circle cx="12" cy="14" r="8"/>',
  refresh: '<path d="M21 4v6h-6"/><path d="M3 20v-6h6"/><path d="M3.5 9a9 9 0 0 1 14.9-3.4L21 8M3 16l2.6 2.4A9 9 0 0 0 20.5 15"/>',
  trendingDown: '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  protein: '<path d="M15.5 3.5a5 5 0 0 0-5 5c0 .8.2 1.6.6 2.3L5 17.2A2.6 2.6 0 0 0 8.8 21l6.4-6.1c.7.4 1.5.6 2.3.6a5 5 0 0 0 0-10z"/>',
  ruler: '<path d="M21.3 8.7 15.3 2.7a1 1 0 0 0-1.4 0L2.7 13.9a1 1 0 0 0 0 1.4l6 6a1 1 0 0 0 1.4 0L21.3 10a1 1 0 0 0 0-1.4z"/><path d="M7 12l1.5 1.5M10 9l1.5 1.5M13 6l1.5 1.5"/>',
  droplet: '<path d="M12 2.5 6.5 9.3a7 7 0 1 0 11 0z"/>',
  weight: '<circle cx="12" cy="5" r="3"/><path d="M6.5 8h11l1.2 10.3a2 2 0 0 1-2 2.2H7.3a2 2 0 0 1-2-2.2z"/>',
  bike: '<circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6h3l1.5 6M6 17.5l4-8h5.5l-5 8M9 6h3"/>',
  run: '<circle cx="13" cy="4.5" r="2"/><path d="m5 22 3-6 3.2 1.2L14 12M8 16l-2-4.5 5-1.5 3 3 3-1"/>',
  utensils: '<path d="M4 2v7a3 3 0 0 0 3 3v10M7 2v6M10 2v6"/><path d="M17 2c-1.5 1-2 3-2 5s.5 3 2 3v12"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 16-10 0 10-4 15-9 17z"/><path d="M4 20c3-4 6-6 11-7"/>',
  arrowRight: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13.5"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  dumbbell: '<path d="M6.5 6.5v11M3.5 9v5M17.5 6.5v11M20.5 9v5M6.5 12h11"/>'
};

function icon(name, cls = 'w-4 h-4') {
  const body = ICONS[name];
  if (!body) return '';
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

// ----------------------------------------------------
// 4B. SESSION DATABASE (IndexedDB — permanent workout log store)
// ----------------------------------------------------
// Every finished session is written here automatically. Unlike localStorage
// it keeps a growing table of completed sessions that can be browsed or exported.
const DB_NAME = 'myfit_db';
const DB_VERSION = 1;
const DB_STORE = 'sessions';
const SESSION_FALLBACK_KEY = 'pumpd_session_db_v1';
let _dbPromise = null;
let _dbUnavailable = false;

function openDB() {
  if (_dbUnavailable) return Promise.reject(new Error('IndexedDB unavailable'));
  if (_dbPromise) return _dbPromise;
  _dbPromise = new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) { _dbUnavailable = true; reject(new Error('IndexedDB unavailable')); return; }
    let settled = false;
    const fail = (err, permanent) => {
      if (settled) return;
      settled = true;
      _dbPromise = null;
      if (permanent) _dbUnavailable = true;
      reject(err || new Error('IndexedDB failed'));
    };
    // If the DB does not open promptly, fall back instead of hanging the UI.
    const timer = setTimeout(() => fail(new Error('IndexedDB timed out'), true), 2000);
    let req;
    try {
      req = indexedDB.open(DB_NAME, DB_VERSION);
    } catch (e) {
      clearTimeout(timer);
      fail(e);
      return;
    }
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        const store = db.createObjectStore(DB_STORE, { keyPath: 'id' });
        store.createIndex('date', 'date', { unique: false });
      }
    };
    req.onsuccess = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(req.result);
    };
    req.onerror = () => { clearTimeout(timer); fail(req.error, true); };
    req.onblocked = () => { clearTimeout(timer); fail(new Error('IndexedDB blocked'), false); };
  });
  return _dbPromise;
}

// ---- localStorage fallback so the feature never dead-ends ----
function fbGetAllSessions() {
  const list = loadStorage(SESSION_FALLBACK_KEY, []);
  return Array.isArray(list) ? list : [];
}
function fbPutSession(record) {
  const list = fbGetAllSessions();
  const idx = list.findIndex(r => r.id === record.id);
  if (idx >= 0) list[idx] = record; else list.push(record);
  saveStorage(SESSION_FALLBACK_KEY, list);
}
function fbDeleteSession(id) {
  saveStorage(SESSION_FALLBACK_KEY, fbGetAllSessions().filter(r => r.id !== id));
}

async function dbPutSession(record) {
  try {
    const db = await openDB();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, 'readwrite');
      tx.objectStore(DB_STORE).put(record);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
    return true;
  } catch (e) {
    fbPutSession(record);
    return true;
  }
}

async function dbGetAllSessions() {
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, 'readonly');
      const req = tx.objectStore(DB_STORE).getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    return fbGetAllSessions();
  }
}

async function dbDeleteSession(id) {
  try {
    const db = await openDB();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, 'readwrite');
      tx.objectStore(DB_STORE).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    return true;
  } catch (e) {
    fbDeleteSession(id);
    return true;
  }
}

// Convert an in-memory log entry into a flat, table-friendly DB record.
function buildSessionRecord(entry, day) {
  const exercises = (entry.exercises || [])
    .map(e => ({
      name: e.name,
      sets: (e.sets || []).filter(hasLoggedSetValue).map(s => ({
        setNum: s.setNum,
        weight: s.weight,
        reps: s.reps,
        duration: s.duration,
        durationLeft: s.durationLeft,
        durationRight: s.durationRight,
        distance: s.distance,
        completed: !!s.completed
      }))
    }))
    .filter(e => e.sets.length > 0);

  let volume = 0;
  exercises.forEach(e => e.sets.forEach(s => {
    if (s.completed && s.weight && s.reps) volume += Number(s.weight) * Number(s.reps);
  }));

  return {
    id: `${entry.date}_${entry.dayId}`,
    date: entry.date,
    dayId: entry.dayId,
    dayName: entry.dayName,
    title: day ? day.title : (entry.dayName || ''),
    completedAt: entry.completedAt || new Date().toISOString(),
    totalSets: entry.totalSets || 0,
    completedSets: entry.completedSets || 0,
    volume: Math.round(volume),
    exercises
  };
}

// One-time import of previously finished sessions kept only in localStorage.
async function migrateLogsToDB() {
  try {
    const existing = await dbGetAllSessions();
    if (existing.length > 0) return;
    const logs = loadStorage(STORAGE_KEYS.LOGS, []);
    const completed = logs.filter(l => !l.inProgress && l.exercises?.some(e => e.sets?.some(hasLoggedSetValue)));
    for (const entry of completed) {
      const day = WORKOUT_DAYS.find(d => d.id === entry.dayId);
      await dbPutSession(buildSessionRecord(entry, day));
    }
    if (completed.length) console.info(`Imported ${completed.length} past session(s) into the database.`);
  } catch (e) {}
}

// ----------------------------------------------------
// 5. AUDIO & HAPTIC VIBRATION
// ----------------------------------------------------
function getAudio() {
  if (!AppState.audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) AppState.audioCtx = new AudioContext();
  }
  if (AppState.audioCtx && AppState.audioCtx.state === 'suspended') {
    AppState.audioCtx.resume();
  }
  return AppState.audioCtx;
}

function playDing() {
  try {
    const ctx = getAudio();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1760, now + 0.15);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.7);
  } catch (e) {}
}

function playTick() {
  try {
    const ctx = getAudio();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  } catch (e) {}
}

function triggerHaptic(type = 'tap') {
  if ('vibrate' in navigator) {
    if (type === 'rest') navigator.vibrate([250, 100, 250]);
    else if (type === 'success') navigator.vibrate([150, 50, 150, 50, 250]);
    else navigator.vibrate(60);
  }
}

// ----------------------------------------------------
// 6. REST STOPWATCH & COUNTDOWN (Square Floating Widget)
// ----------------------------------------------------
function startRestTimer(seconds, contextLabel = 'Rest between sets', initialTotal) {
  cancelRestTimer(false);
  AppState.timerTotal = initialTotal || seconds;
  AppState.timerRemaining = seconds;
  AppState.timerContext = contextLabel;
  updateRestWidgetUI();

  // Persist target timestamp so timer survives locking phone, switching apps, or tab reloads
  saveStorage(STORAGE_KEYS.REST_TARGET, {
    target: Date.now() + (seconds * 1000),
    total: AppState.timerTotal,
    context: contextLabel
  });

  const widget = document.getElementById('floating-rest-widget');
  if (widget) widget.classList.remove('hidden');

  triggerHaptic('tap');
  getAudio();

  AppState.timerInterval = setInterval(() => {
    AppState.timerRemaining--;
    updateRestWidgetUI();

    if (AppState.timerRemaining <= 3 && AppState.timerRemaining > 0) {
      playTick();
      if ('vibrate' in navigator) navigator.vibrate(40);
    }

    if (AppState.timerRemaining <= 0) {
      cancelRestTimer(true);
      playDing();
      triggerHaptic('rest');
      showToast(`⏰ Rest complete: ${AppState.timerContext}! Ready for next set.`, 'success');
    }
  }, 1000);
}

function cancelRestTimer(clearStorage = true) {
  if (AppState.timerInterval) {
    clearInterval(AppState.timerInterval);
    AppState.timerInterval = null;
  }
  if (clearStorage) {
    saveStorage(STORAGE_KEYS.REST_TARGET, null);
  }
  const widget = document.getElementById('floating-rest-widget');
  if (widget) widget.classList.add('hidden');
}

function restoreRestTimerIfActive() {
  const saved = loadStorage(STORAGE_KEYS.REST_TARGET, null);
  if (!saved || !saved.target) return;
  const remaining = Math.round((saved.target - Date.now()) / 1000);
  if (remaining > 0) {
    startRestTimer(remaining, saved.context, saved.total);
  } else {
    saveStorage(STORAGE_KEYS.REST_TARGET, null);
  }
}

function adjustRestTimer(sec) {
  AppState.timerRemaining = Math.max(0, AppState.timerRemaining + sec);
  AppState.timerTotal = Math.max(AppState.timerTotal, AppState.timerRemaining);
  updateRestWidgetUI();
  triggerHaptic('tap');
}

function startCustomRest(sec, label) {
  startRestTimer(sec, label || `${sec}s Rest`);
  showToast(`Started ${sec}s rest countdown`);
}

function updateRestWidgetUI() {
  const display = document.getElementById('floating-rest-display');
  const contextEl = document.getElementById('floating-rest-context');
  const bar = document.getElementById('floating-rest-bar');

  if (contextEl) {
    contextEl.innerText = AppState.timerContext || 'Rest between sets';
  }

  if (display) {
    const m = Math.floor(AppState.timerRemaining / 60);
    const s = AppState.timerRemaining % 60;
    display.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  if (bar && AppState.timerTotal > 0) {
    const pct = Math.max(0, Math.min(100, (AppState.timerRemaining / AppState.timerTotal) * 100));
    bar.style.width = `${pct}%`;
  }
}

// ----------------------------------------------------
// 7. DOUBLE PROGRESSION EVALUATOR
// ----------------------------------------------------
function checkDoubleProgression(exerciseId, workingSets) {
  const day = WORKOUT_DAYS.find(d => d.exercises.some(e => e.id === exerciseId));
  if (!day) return null;
  const ex = day.exercises.find(e => e.id === exerciseId);
  if (!ex || ex.trackType === 'run' || ex.trackType === 'hold' || ex.weighted === false || !workingSets || workingSets.length === 0) return null;

  const validSets = workingSets.filter(s => s.completed && Number(s.reps) > 0);
  const targetCount = AppState.isDeload ? Math.max(1, ex.sets - 1) : ex.sets;

  if (validSets.length >= targetCount && validSets.every(s => Number(s.reps) >= ex.maxReps)) {
    const inc = (ex.primaryMuscle === 'quadriceps' || ex.primaryMuscle === 'hamstrings' || ex.primaryMuscle === 'glutes') ? '+2.5–5 kg' : '+1–2.5 kg';
    return {
      type: 'PROGRESSED',
      msg: `${icon('target', 'w-3.5 h-3.5 inline -mt-0.5 mr-1')}Milestone achieved — hit ${ex.maxReps} reps on all sets. Add ${inc} next session and reset to ${ex.minReps} reps.`
    };
  }

  if (validSets.length >= targetCount && !validSets.every(s => Number(s.reps) >= ex.minReps)) {
    return {
      type: 'BELOW',
      msg: `${icon('alert', 'w-3.5 h-3.5 inline -mt-0.5 mr-1')}Under ${ex.minReps} reps. If this happens twice running, reduce weight by 5–10% to rebuild clean form.`
    };
  }

  return null;
}

// ----------------------------------------------------
// 8. TOAST NOTIFICATIONS (Square)
// ----------------------------------------------------
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-600' : type === 'warning' ? 'bg-amber-600' : 'bg-[#1D222E] border border-white/10';
  toast.className = `${bg} text-white px-3.5 py-2.5 rounded shadow-lg flex items-center justify-between text-xs transition-all duration-200 transform translate-y-2 opacity-0 max-w-xs w-full pointer-events-auto font-medium`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="ml-2 text-white/70 hover:text-white text-base leading-none">&times;</button>
  `;

  toast.querySelector('button').onclick = () => toast.remove();
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.remove('translate-y-2', 'opacity-0'));
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// ----------------------------------------------------
// 9. NAVIGATION CONTROLLER (All Square Buttons)
// ----------------------------------------------------
function switchNavTab(tabName) {
  if (AppState.activeNav === 'tracker' && tabName !== 'tracker') {
    autoSaveWorkoutSession();
  }
  AppState.activeNav = tabName;
  saveStorage(STORAGE_KEYS.LAST_TAB, tabName);

  const sectionTitles = { dashboard: 'Dashboard', workouts: 'Workouts', tracker: 'Track Session', diet: 'Diet Log', progress: 'Progress & Logs' };
  const headerTitle = document.getElementById('header-section-title');
  if (headerTitle) headerTitle.innerText = sectionTitles[tabName] || 'Dashboard';

  const views = {
    dashboard: document.getElementById('view-dashboard'),
    workouts: document.getElementById('view-workouts'),
    tracker: document.getElementById('view-tracker'),
    diet: document.getElementById('view-diet'),
    progress: document.getElementById('view-progress')
  };

  Object.keys(views).forEach(key => {
    if (views[key]) {
      if (key === tabName) views[key].classList.remove('hidden');
      else views[key].classList.add('hidden');
    }
  });

  // Desktop sidebar buttons
  const deskNavs = ['dashboard', 'workouts', 'tracker', 'diet', 'progress'];
  deskNavs.forEach(id => {
    const btn = document.getElementById(`desk-nav-${id}`);
    if (btn) {
      if (id === tabName) {
        btn.className = 'w-full flex items-center gap-3 px-3 py-2.5 rounded text-[#E5A93C] bg-[#E5A93C]/10 border border-[#E5A93C]/20 transition-all text-left';
      } else {
        btn.className = 'w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-400 hover:text-white hover:bg-white/[0.03] border border-transparent transition-all text-left';
      }
    }
  });

  // Mobile bottom bar buttons
  const mobNavs = ['dashboard', 'workouts', 'tracker', 'diet', 'progress'];
  mobNavs.forEach(id => {
    const btn = document.getElementById(`mob-nav-${id}`);
    if (btn) {
      if (id === tabName) {
        btn.className = 'flex flex-col items-center justify-center p-1.5 rounded text-[#E5A93C] bg-[#E5A93C]/10 transition-colors';
      } else {
        btn.className = 'flex flex-col items-center justify-center p-1.5 rounded text-gray-400 hover:text-white transition-colors';
      }
    }
  });

  triggerHaptic('tap');

  if (tabName === 'dashboard') renderDashboardView();
  else if (tabName === 'workouts') renderWorkoutsView();
  else if (tabName === 'tracker') renderTrackerView();
  else if (tabName === 'diet') renderDietView();
  else if (tabName === 'progress') renderProgressView();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ----------------------------------------------------
// 9A. DIET LOG (Portion-based approximate nutrition)
// ----------------------------------------------------
const DIET_TARGETS = { minCalories: 1900, maxCalories: 2200, protein: 150 };
const DIET_MEALS = [
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'workout', label: 'Post-workout' },
  { id: 'dinner', label: 'Dinner' },
  { id: 'snack', label: 'Snack / Other' }
];
// Approximate values per 100 g or 100 ml. These are estimates, not lab values;
// use the package label in the custom-food form when it is available.
const DIET_FOODS = {
  oats: { name: 'Oats', unit: 'g', calories: 380, protein: 13, carbs: 68, fat: 7 },
  milk: { name: 'Toned milk', unit: 'ml', calories: 50, protein: 3.3, carbs: 4.8, fat: 3 },
  sattu: { name: 'Sattu', unit: 'g', calories: 375, protein: 22.5, carbs: 58, fat: 5 },
  banana: { name: 'Banana (peeled)', unit: 'g', calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3 },
  apple: { name: 'Apple', unit: 'g', calories: 52, protein: 0.3, carbs: 13.8, fat: 0.2 },
  rice: { name: 'Cooked rice', unit: 'g', calories: 130, protein: 2.7, carbs: 28.2, fat: 0.3 },
  vegetables: { name: 'Mixed vegetables', unit: 'g', calories: 45, protein: 2.5, carbs: 8, fat: 0.5 },
  sweetPotato: { name: 'Sweet potato (boiled)', unit: 'g', calories: 86, protein: 1.6, carbs: 20.1, fat: 0.1 },
  curd: { name: 'Curd', unit: 'g', calories: 60, protein: 3.5, carbs: 4.7, fat: 3 },
  egg: { name: 'Whole egg (edible portion)', unit: 'g', calories: 143, protein: 12.6, carbs: 0.7, fat: 9.5 },
  chicken: { name: 'Chicken breast (cooked)', unit: 'g', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  whey: { name: 'Whey protein powder (typical)', unit: 'g', calories: 400, protein: 80, carbs: 8, fat: 6 },
  soya: { name: 'Soya chunks (dry)', unit: 'g', calories: 345, protein: 52, carbs: 33, fat: 0.5 },
  chickpeas: { name: 'Chickpeas (cooked)', unit: 'g', calories: 164, protein: 8.9, carbs: 27.4, fat: 2.6 },
  rajma: { name: 'Rajma (cooked)', unit: 'g', calories: 127, protein: 8.7, carbs: 22.8, fat: 0.5 },
  dal: { name: 'Mixed dal (cooked)', unit: 'g', calories: 116, protein: 7.5, carbs: 19, fat: 0.4 },
  peanuts: { name: 'Peanuts', unit: 'g', calories: 567, protein: 25.8, carbs: 16.1, fat: 49.2 },
  potato: { name: 'Potatoes (boiled)', unit: 'g', calories: 87, protein: 1.9, carbs: 20.1, fat: 0.1 },
  oil: { name: 'Cooking oil', unit: 'g', calories: 884, protein: 0, carbs: 0, fat: 100 }
};

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getSelectedDietDate() {
  const input = document.getElementById('diet-date');
  return input?.value || localDateKey();
}

function getDietLogs() {
  const logs = loadStorage(STORAGE_KEYS.DIET_LOGS, {});
  return logs && typeof logs === 'object' && !Array.isArray(logs) ? logs : {};
}

function saveDietLogs(logs) {
  saveStorage(STORAGE_KEYS.DIET_LOGS, logs);
  const status = document.getElementById('diet-save-status');
  if (status) status.innerText = 'Saved on this device';
}

function getDietFoodsForSelect() {
  const custom = loadStorage(STORAGE_KEYS.DIET_CUSTOM_FOODS, []);
  return [
    ...Object.entries(DIET_FOODS).map(([id, food]) => ({ id, ...food })),
    ...(Array.isArray(custom) ? custom : []).map(food => ({ ...food, id: `custom:${food.id}` }))
  ];
}

function escapeDietText(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function updateDietFoodFields() {
  const select = document.getElementById('diet-food-select');
  const customFields = document.getElementById('diet-custom-food-fields');
  const unitLabel = document.getElementById('diet-food-unit');
  if (!select || !customFields) return;
  const isNewCustom = select.value === '__custom__';
  customFields.classList.toggle('hidden', !isNewCustom);
  const food = getDietFoodsForSelect().find(item => item.id === select.value);
  const customUnit = document.getElementById('diet-custom-unit')?.value || 'g';
  if (unitLabel) unitLabel.innerText = isNewCustom ? customUnit : (food?.unit || 'g');
  const amount = document.getElementById('diet-food-amount');
  if (amount) amount.placeholder = `Amount (${isNewCustom ? customUnit : (food?.unit || 'g')})`;
}

function renderDietView() {
  const dateInput = document.getElementById('diet-date');
  if (!dateInput) return;
  if (!dateInput.value) dateInput.value = localDateKey();
  const selectedDate = dateInput.value;
  const allLogs = getDietLogs();
  const dayLog = allLogs[selectedDate] || { entries: [] };
  const entries = Array.isArray(dayLog.entries) ? dayLog.entries : [];
  const foods = getDietFoodsForSelect();
  const foodSelect = document.getElementById('diet-food-select');
  if (foodSelect) {
    const previous = foodSelect.value;
    foodSelect.innerHTML = '<option value="">Choose a food…</option>' + foods.map(food => `<option value="${escapeDietText(food.id)}">${escapeDietText(food.name)} (${food.unit})</option>`).join('') + '<option value="__custom__">+ Add a custom food…</option>';
    if (Array.from(foodSelect.options).some(option => option.value === previous)) foodSelect.value = previous;
    updateDietFoodFields();
  }

  const totals = entries.reduce((sum, entry) => {
    sum.calories += Number(entry.calories) || 0;
    sum.protein += Number(entry.protein) || 0;
    sum.carbs += Number(entry.carbs) || 0;
    sum.fat += Number(entry.fat) || 0;
    return sum;
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
  const setText = (id, value) => { const element = document.getElementById(id); if (element) element.innerText = value; };
  setText('diet-total-calories', `${Math.round(totals.calories)} kcal`);
  setText('diet-total-protein', `${totals.protein.toFixed(1)} g`);
  setText('diet-total-carbs', `${totals.carbs.toFixed(1)} g`);
  setText('diet-total-fat', `${totals.fat.toFixed(1)} g`);
  setText('diet-calorie-status', totals.calories < DIET_TARGETS.minCalories
    ? `${Math.round(DIET_TARGETS.minCalories - totals.calories)} kcal to 1,800 minimum`
    : totals.calories <= DIET_TARGETS.maxCalories
      ? `${Math.round(DIET_TARGETS.maxCalories - totals.calories)} kcal to 2,000 upper target`
      : `${Math.round(totals.calories - DIET_TARGETS.maxCalories)} kcal above 2,000 target`);
  setText('diet-protein-status', totals.protein >= DIET_TARGETS.protein
    ? `${(totals.protein - DIET_TARGETS.protein).toFixed(1)} g above 150 g target`
    : `${(DIET_TARGETS.protein - totals.protein).toFixed(1)} g to 150 g target`);

  const history = document.getElementById('diet-history');
  if (history) {
    const dates = Object.keys(allLogs).filter(date => allLogs[date]?.entries?.length).sort((a, b) => b.localeCompare(a)).slice(0, 7);
    history.innerHTML = dates.length ? `<span class="text-gray-400">Recent logged days:</span> ${dates.map(date => `<button onclick="selectDietDate('${date}')" class="px-2.5 py-1 rounded btn-dark ${date === selectedDate ? 'text-amber-400' : 'text-gray-300'}">${date === localDateKey() ? 'Today' : new Date(`${date}T12:00:00`).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</button>`).join('')}` : '<span class="text-gray-500">Your logged days will appear here for quick review.</span>';
  }

  const list = document.getElementById('diet-meal-list');
  if (!list) return;
  list.innerHTML = DIET_MEALS.map(meal => {
    const mealEntries = entries.filter(entry => entry.meal === meal.id);
    const mealTotals = mealEntries.reduce((sum, entry) => {
      sum.calories += Number(entry.calories) || 0;
      sum.protein += Number(entry.protein) || 0;
      sum.carbs += Number(entry.carbs) || 0;
      sum.fat += Number(entry.fat) || 0;
      return sum;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
    const rows = mealEntries.length ? mealEntries.map(entry => `
      <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_125px_minmax(145px,auto)_auto] gap-2 items-center py-2 border-b border-white/[0.05] last:border-0">
        <div class="min-w-0"><div class="text-xs font-semibold text-white truncate">${escapeDietText(entry.name)}</div><div class="text-[10px] text-gray-500">${Math.round(entry.calories)} kcal • P ${entry.protein.toFixed(1)} • C ${entry.carbs.toFixed(1)} • F ${entry.fat.toFixed(1)} g</div></div>
        <div class="flex items-center gap-1"><input type="number" min="0.1" step="any" value="${entry.amount}" onchange="updateDietEntryAmount('${entry.id}', this.value)" aria-label="Amount of ${escapeDietText(entry.name)}" class="w-full bg-[#0C0E12] border border-white/[0.08] text-xs text-white px-2 py-1.5 rounded focus:outline-none focus:border-amber-400" /><span class="text-[10px] text-gray-400">${escapeDietText(entry.unit)}</span></div>
        <div class="text-[10px] text-gray-400">Protein ${entry.protein.toFixed(1)} g</div>
        <button onclick="removeDietEntry('${entry.id}')" aria-label="Remove ${escapeDietText(entry.name)}" class="px-2 py-1.5 rounded btn-dark text-[10px] text-rose-300">Remove</button>
      </div>`).join('') : '<p class="py-3 text-[11px] text-gray-500">No food logged for this meal yet.</p>';
    return `<section class="dashboard-card p-4"><div class="flex items-center justify-between gap-2 pb-2 border-b border-white/[0.06]"><h3 class="text-xs font-bold text-white uppercase tracking-wider">${meal.label}</h3><span class="text-[10px] text-gray-400 font-mono">${Math.round(mealTotals.calories)} kcal • P ${mealTotals.protein.toFixed(1)} g</span></div><div>${rows}</div></section>`;
  }).join('');
}

function selectDietDate(date) {
  const input = document.getElementById('diet-date');
  if (input) input.value = date;
  renderDietView();
}

function nutritionForAmount(food, amount) {
  const scale = Number(amount) / 100;
  return {
    calories: (Number(food.calories) || 0) * scale,
    protein: (Number(food.protein) || 0) * scale,
    carbs: (Number(food.carbs) || 0) * scale,
    fat: (Number(food.fat) || 0) * scale
  };
}

function storeDietEntry(meal, food, amount) {
  const logs = getDietLogs();
  const date = getSelectedDietDate();
  const dayLog = logs[date] || { date, entries: [] };
  const nutrition = nutritionForAmount(food, amount);
  dayLog.entries.push({ id: `food_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, meal, foodId: food.id, name: food.name, amount: Number(amount), unit: food.unit, base: { calories: food.calories, protein: food.protein, carbs: food.carbs, fat: food.fat }, ...nutrition });
  dayLog.updatedAt = new Date().toISOString();
  logs[date] = dayLog;
  saveDietLogs(logs);
}

function addDietFood() {
  const meal = document.getElementById('diet-meal-select')?.value || 'snack';
  const foodId = document.getElementById('diet-food-select')?.value;
  const amount = Number(document.getElementById('diet-food-amount')?.value);
  if (!foodId) return showToast('Choose a food to log.', 'info');
  if (!Number.isFinite(amount) || amount <= 0) return showToast('Enter a portion amount greater than zero.', 'info');

  let food;
  if (foodId === '__custom__') {
    const name = document.getElementById('diet-custom-name')?.value.trim();
    const macroInputs = ['diet-custom-calories', 'diet-custom-protein', 'diet-custom-carbs', 'diet-custom-fat'].map(id => document.getElementById(id)?.value.trim() ?? '');
    const [calories, protein, carbs, fat] = macroInputs.map(Number);
    if (!name || macroInputs.some(value => value === '') || ![calories, protein, carbs, fat].every(value => Number.isFinite(value) && value >= 0)) {
      return showToast('Enter a food name and its nutrition per 100 g/ml.', 'info');
    }
    const customId = `custom_${Date.now()}`;
    food = { id: customId, name, unit: document.getElementById('diet-custom-unit')?.value || 'g', calories, protein, carbs, fat };
    const customFoods = loadStorage(STORAGE_KEYS.DIET_CUSTOM_FOODS, []);
    saveStorage(STORAGE_KEYS.DIET_CUSTOM_FOODS, [...(Array.isArray(customFoods) ? customFoods : []), food]);
  } else {
    food = getDietFoodsForSelect().find(item => item.id === foodId);
  }
  if (!food) return showToast('That food could not be found. Please choose it again.', 'error');
  storeDietEntry(meal, food, amount);
  const amountInput = document.getElementById('diet-food-amount');
  if (amountInput) amountInput.value = '';
  if (foodId === '__custom__') {
    ['diet-custom-name', 'diet-custom-calories', 'diet-custom-protein', 'diet-custom-carbs', 'diet-custom-fat'].forEach(id => { const input = document.getElementById(id); if (input) input.value = ''; });
    const select = document.getElementById('diet-food-select');
    if (select) select.value = `custom:${food.id}`;
  }
  renderDietView();
  showToast(`${food.name} added and saved.`, 'success');
}

const DIET_PRESETS = {
  breakfast: { meal: 'breakfast', foods: [['oats', 50], ['milk', 250], ['banana', 118], ['apple', 180]] },
  lunch_chickpeas_soya: { meal: 'lunch', foods: [['chickpeas', 150], ['sweetPotato', 200], ['soya', 30], ['vegetables', 200]] },
  dinner_soya: { meal: 'dinner', foods: [['rice', 150], ['curd', 100], ['egg', 100], ['soya', 60], ['vegetables', 200]] },
  dinner_chicken: { meal: 'dinner', foods: [['rice', 150], ['curd', 100], ['egg', 100], ['chicken', 180], ['vegetables', 200]] },
  shake: { meal: 'workout', foods: [['whey', 30], ['milk', 250], ['sattu', 30]] }
};

function addDietPlannedMeal() {
  const key = document.getElementById('diet-template-select')?.value;
  const preset = DIET_PRESETS[key];
  if (!preset) return;
  preset.foods.forEach(([foodId, amount]) => storeDietEntry(preset.meal, { id: foodId, ...DIET_FOODS[foodId] }, amount));
  const mealSelect = document.getElementById('diet-meal-select');
  if (mealSelect) mealSelect.value = preset.meal;
  renderDietView();
  showToast('Planned portions added to this day’s log. Adjust amounts to match what you ate.', 'success');
}

function updateDietEntryAmount(entryId, amountValue) {
  const amount = Number(amountValue);
  if (!Number.isFinite(amount) || amount <= 0) return showToast('Use an amount greater than zero.', 'info');
  const logs = getDietLogs();
  const date = getSelectedDietDate();
  const entry = logs[date]?.entries?.find(item => item.id === entryId);
  if (!entry) return;
  entry.amount = amount;
  Object.assign(entry, nutritionForAmount(entry.base || {}, amount));
  logs[date].updatedAt = new Date().toISOString();
  saveDietLogs(logs);
  renderDietView();
}

function removeDietEntry(entryId) {
  const logs = getDietLogs();
  const date = getSelectedDietDate();
  if (!logs[date]) return;
  logs[date].entries = logs[date].entries.filter(item => item.id !== entryId);
  logs[date].updatedAt = new Date().toISOString();
  saveDietLogs(logs);
  renderDietView();
}

function exportDietLogs() {
  const backup = { exportedAt: new Date().toISOString(), logs: getDietLogs(), customFoods: loadStorage(STORAGE_KEYS.DIET_CUSTOM_FOODS, []) };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `diet-log-backup-${localDateKey()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

// ----------------------------------------------------
// 10. RENDER: VIEW 1 — DASHBOARD (Matches ui_inspiration.jpg)
// ----------------------------------------------------
function renderDashboardView() {
  const hr = new Date().getHours();
  const greetingEl = document.getElementById('hero-greeting');
  if (greetingEl) {
    greetingEl.innerText = hr < 12 ? 'Good Morning,' : hr < 17 ? 'Good Afternoon,' : 'Good Evening,';
  }

  // Date Badges (Header & Tracker)
  const todayDateFormatted = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  const headerDate = document.getElementById('header-date-display');
  if (headerDate) headerDate.innerText = todayDateFormatted;
  const trackerDate = document.getElementById('tracker-session-date');
  if (trackerDate) trackerDate.innerText = todayDateFormatted;

  // Grounded Stat Calculations: 94.5 -> 85.0 kg
  const avg = calculateRollingAvg();
  const startWeight = 94.5;
  const targetWeight = 85.0;
  const totalLost = (startWeight - avg).toFixed(1);
  const remaining = Math.max(0, (avg - targetWeight)).toFixed(1);

  // Weight Rolling Avg Display
  const weightVal = document.getElementById('stat-weight-val');
  if (weightVal) weightVal.innerText = `${avg} kg`;

  // Total Lost & Remaining
  const totalLostVal = document.getElementById('stat-total-lost-val');
  if (totalLostVal) totalLostVal.innerText = `${totalLost > 0 ? `-${totalLost}` : totalLost} kg`;

  const remainingVal = document.getElementById('stat-remaining-val');
  if (remainingVal) remainingVal.innerText = `${remaining} kg to go`;

  // Populate Today's Workout Card
  const todayDay = WORKOUT_DAYS.find(d => d.id === AppState.currentDayId) || WORKOUT_DAYS[1];
  const title = document.getElementById('dash-workout-title');
  const subtitle = document.getElementById('dash-workout-subtitle');
  const listContainer = document.getElementById('dash-exercise-list');

  // Active Workout In-Progress Recovery Check
  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  const activeLog = logs.find(l => l.date === todayStr && l.inProgress && l.exercises?.some(e => e.sets?.some(hasLoggedSetValue)));
  const bannerContainer = document.getElementById('active-session-banner-container');
  const startBtn = document.getElementById('dash-start-workout-btn');

  if (activeLog && bannerContainer) {
    const totalSets = activeLog.totalSets || activeLog.exercises.reduce((acc, e) => acc + (e.sets?.length || 0), 0);
    const completedSets = activeLog.completedSets || activeLog.exercises.reduce((acc, e) => acc + (e.sets?.filter(s => s.completed)?.length || 0), 0);
    const workoutDay = WORKOUT_DAYS.find(d => d.id === activeLog.dayId) || todayDay;

    bannerContainer.innerHTML = `
      <div class="dashboard-card p-4 border-2 border-amber-500/60 bg-amber-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl mb-4">
        <div class="flex items-center gap-3">
          <span class="w-3 h-3 rounded-sm bg-amber-400 animate-pulse flex-shrink-0"></span>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">${icon('zap', 'w-3.5 h-3.5')}Workout In Progress</span>
              <span class="text-[10px] text-gray-300 font-mono bg-black/40 px-2 py-0.5 rounded border border-white/10">${completedSets} / ${totalSets} items logged</span>
            </div>
            <h3 class="text-sm font-bold text-white mt-1">${workoutDay.name}: ${workoutDay.title}</h3>
            <p class="text-[11px] text-gray-300 mt-0.5">Session left off mid-workout. Tap Resume to continue tracking right where you left off.</p>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button onclick="resetActiveWorkoutSession()" class="px-3 py-2 rounded btn-dark text-xs text-gray-400 hover:text-white">Discard</button>
          <button onclick="resumeActiveWorkoutSession('${activeLog.dayId}')" class="px-5 py-2.5 rounded btn-gold text-xs font-extrabold shadow flex items-center gap-1.5">
            <span class="flex items-center gap-1.5">Resume Workout ${icon('arrowRight', 'w-3.5 h-3.5')}</span>
          </button>
        </div>
      </div>
    `;
    bannerContainer.classList.remove('hidden');

    if (startBtn) {
      startBtn.innerHTML = `
        <span class="flex items-center justify-center gap-1.5">${icon('zap', 'w-3.5 h-3.5')}Resume In-Progress Session (${completedSets}/${totalSets} done)</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      `;
      startBtn.onclick = () => resumeActiveWorkoutSession(activeLog.dayId);
    }
  } else {
    if (bannerContainer) {
      bannerContainer.innerHTML = '';
      bannerContainer.classList.add('hidden');
    }
    if (startBtn) {
      startBtn.innerHTML = `
        <span>Start 8:30 PM Workout & Track Sets</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      `;
      startBtn.onclick = () => startTodayWorkoutSession();
    }
  }

  if (title) title.innerText = `${todayDay.name}: ${todayDay.title}`;
  if (subtitle) subtitle.innerText = todayDay.subtitle;
  const dashTime = document.getElementById('dash-workout-time');
  if (dashTime) dashTime.innerText = todayDay.time;
  if (startBtn && !activeLog) startBtn.innerHTML = `<span>${todayDay.exercises[0]?.trackType === 'run' ? 'Start Run & Track Time' : 'Start Workout & Track Sets'}</span><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`;

  if (listContainer) {
    listContainer.innerHTML = '';
    if (todayDay.exercises.length === 0) {
      listContainer.innerHTML = `
        <div class="py-6 text-center text-gray-400 text-xs">
          <span class="inline-flex items-center justify-center text-emerald-400/60 mb-2">${icon('leaf', 'w-6 h-6')}</span>
          Rest & recovery day. Enjoy an active recovery walk and allow muscle fibers to rebuild.
        </div>
      `;
    } else {
      // Check storage for completed status
      const logs = loadStorage(STORAGE_KEYS.LOGS, []);
      const todayStr = new Date().toISOString().slice(0, 10);
      const existingLog = logs.find(l => l.date === todayStr && l.dayId === todayDay.id);

      todayDay.exercises.forEach((ex, idx) => {
        const isDone = existingLog?.exercises?.find(e => e.id === ex.id)?.sets?.some(s => s.completed) || false;
        const row = document.createElement('div');
        row.className = 'p-2.5 rounded bg-[#161B24] border border-white/[0.04] hover:border-white/[0.09] flex items-center justify-between gap-3 text-xs transition-colors';
        row.innerHTML = `
          <div class="flex items-center gap-3 min-w-0">
            <!-- Square Checkbox -->
            <span class="square-checkbox ${isDone ? 'checked' : ''}" onclick="toggleDashExerciseDone('${ex.id}', this)" title="Mark completed">
              <svg class="w-3 h-3 text-black ${isDone ? '' : 'hidden'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </span>

            <!-- Exercise Name & Prescription -->
            <div class="min-w-0">
              <div class="font-bold text-white text-xs truncate">${ex.name}</div>
              <div class="text-[10.5px] text-gray-400 mt-0.5 flex items-center gap-1.5 flex-wrap">
                <span class="text-amber-400/90 font-mono font-semibold">${getExerciseTargetText(ex)}</span>
                <span class="text-gray-600">&bull;</span>
                <span class="uppercase text-[9.5px] px-1 py-0.2 rounded bg-white/[0.05] text-gray-300 font-mono">${ex.primaryMuscle}</span>
              </div>
            </div>
          </div>

          <!-- Rest Prescription -->
          <div class="text-[10.5px] text-gray-500 font-mono flex-shrink-0">${ex.rest ? `${ex.rest}s rest` : ''}</div>
        `;
        listContainer.appendChild(row);
      });
    }
  }

  // Render Persistent Interactive Todo Lists
  renderTodayChecklist();
  renderWeeklySplit();
}

function toggleDashExerciseDone(exerciseId, el) {
  const todayDay = WORKOUT_DAYS.find(d => d.id === AppState.currentDayId) || WORKOUT_DAYS[1];
  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  let log = logs.find(l => l.date === todayStr && l.dayId === todayDay.id);

  if (!log) {
    log = {
      date: todayStr,
      timestamp: new Date().toISOString(),
      dayId: todayDay.id,
      dayName: todayDay.name,
      exercises: []
    };
    logs.unshift(log);
  }

  let exLog = log.exercises.find(e => e.id === exerciseId);
  const exDef = todayDay.exercises.find(e => e.id === exerciseId);
  const setsCount = exDef ? (AppState.isDeload ? Math.max(1, exDef.sets - 1) : exDef.sets) : 3;

  if (!exLog) {
    exLog = {
      id: exerciseId,
      name: exDef?.name || exerciseId,
      sets: Array.from({ length: setsCount }, (_, i) => ({
        setNum: i + 1,
        completed: true
      }))
    };
    log.exercises.push(exLog);
  } else {
    const isCurrentlyDone = exLog.sets.some(s => s.completed);
    exLog.sets.forEach(s => s.completed = !isCurrentlyDone);
  }

  saveStorage(STORAGE_KEYS.LOGS, logs);
  renderDashboardView();
  triggerHaptic('tap');
  showToast('Workout progress updated & saved!', 'success');
}

// ----------------------------------------------------
// 10B. TODAY'S CHECKLIST TODO ENGINE (Persistent)
// ----------------------------------------------------
const TODAY_CHECKLIST_ITEMS = [
  {
    id: 'chk_workout',
    title: '8:30 PM Workout Session',
    detail: 'Complete scheduled lifting session (or active recovery walk on rest days)'
  },
  {
    id: 'chk_warmup',
    title: '8-Min Stationary Bike Warm-up',
    detail: 'Moderate pace to elevate body temp & lubricate joints prior to lifting'
  },
  {
    id: 'chk_protein',
    title: 'Hit 140–170g Protein Target',
    detail: 'Adequate amino acid pool to preserve lean muscle tissue in deficit'
  },
  {
    id: 'chk_deficit',
    title: '500–700 kcal Calorie Deficit',
    detail: 'Strict adherence to maintain steady 0.5–0.8 kg/week fat reduction'
  },
  {
    id: 'chk_cardio',
    title: '12–15 Min Post-Lift Cardio',
    detail: 'Stationary bike or incline treadmill at conversational pace'
  },
  {
    id: 'chk_sleep',
    title: '7–9 Hours Quality Sleep',
    detail: 'Essential for hormonal recovery, fat loss, and CNS restoration'
  }
];

function getTodayChecklistState() {
  const store = loadStorage(STORAGE_KEYS.TODAY_CHECKLIST, {});
  const todayKey = new Date().toISOString().slice(0, 10);
  return store[todayKey] || [];
}

function saveTodayChecklistState(checkedIds) {
  const store = loadStorage(STORAGE_KEYS.TODAY_CHECKLIST, {});
  const todayKey = new Date().toISOString().slice(0, 10);
  store[todayKey] = checkedIds;
  saveStorage(STORAGE_KEYS.TODAY_CHECKLIST, store);
}

function toggleTodayChecklistItem(id) {
  let checked = getTodayChecklistState();
  if (checked.includes(id)) {
    checked = checked.filter(x => x !== id);
    triggerHaptic('tap');
  } else {
    checked.push(id);
    triggerHaptic('tap');
    if (checked.length === TODAY_CHECKLIST_ITEMS.length) {
      triggerHaptic('success');
      playDing();
      showToast('All daily transformation pillars completed — flawless consistency.', 'success');
    }
  }
  saveTodayChecklistState(checked);
  renderTodayChecklist();
}

function renderTodayChecklist() {
  const container = document.getElementById('today-checklist-container');
  const counter = document.getElementById('today-checklist-counter');
  if (!container) return;

  const checked = getTodayChecklistState();
  if (counter) {
    counter.innerText = `${checked.length} / ${TODAY_CHECKLIST_ITEMS.length}`;
    if (checked.length === TODAY_CHECKLIST_ITEMS.length) {
      counter.className = 'text-xs font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/40';
    } else {
      counter.className = 'text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20';
    }
  }

  container.innerHTML = '';
  TODAY_CHECKLIST_ITEMS.forEach(item => {
    const isDone = checked.includes(item.id);
    const row = document.createElement('div');
    row.className = `p-2.5 rounded bg-[#161B24] border ${isDone ? 'border-emerald-500/30 bg-emerald-950/15' : 'border-white/[0.04]'} flex items-start gap-3 cursor-pointer hover:border-white/15 transition-all select-none`;
    row.onclick = () => toggleTodayChecklistItem(item.id);
    row.innerHTML = `
      <div class="w-5 h-5 rounded-sm border ${isDone ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-white/20 bg-[#0C0E12] text-transparent'} flex items-center justify-center flex-shrink-0 mt-0.5 transition-all">
        ${icon('check', 'w-3.5 h-3.5')}
      </div>
      <div class="min-w-0 flex-1">
        <div class="font-bold text-xs ${isDone ? 'text-gray-400 line-through' : 'text-white'} transition-colors">${item.title}</div>
        <div class="text-[10.5px] ${isDone ? 'text-gray-500' : 'text-gray-400'} mt-0.5 leading-snug">${item.detail}</div>
      </div>
    `;
    container.appendChild(row);
  });
}

// ----------------------------------------------------
// 10D. WEEKLY SPLIT CONSISTENCY (Rendered from WORKOUT_DAYS)
// ----------------------------------------------------
function renderWeeklySplit() {
  const grid = document.getElementById('weekly-split-grid');
  const summary = document.getElementById('weekly-split-summary');
  if (!grid) return;

  const order = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const short = { mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat', sun: 'Sun' };
  let trainingDays = 0;

  grid.innerHTML = '';
  order.forEach(id => {
    const day = WORKOUT_DAYS.find(d => d.id === id);
    if (!day) return;
    const isRest = day.exercises.length === 0;
    if (!isRest) trainingDays++;

    const label = isRest ? 'REST' : (day.badge || day.title).toUpperCase();
    const color = isRest ? 'text-gray-500' : 'text-emerald-400';
    const cell = document.createElement('div');
    cell.className = 'flex flex-col items-center gap-1';
    cell.innerHTML = `
      <span class="text-[10px] text-gray-400">${short[id]}</span>
      <span class="text-[8px] ${color} font-bold">${label}</span>
    `;
    grid.appendChild(cell);
  });

  if (summary) summary.innerText = `${trainingDays} Gym + ${7 - trainingDays} Rest`;
}

function startTodayWorkoutSession() {
  AppState.currentDayId = getTodayDayId();
  switchNavTab('tracker');
}

function startSelectedDayWorkout() {
  AppState.currentDayId = AppState.programDayId;
  switchNavTab('tracker');
}

// ----------------------------------------------------
// 11. RENDER: VIEW 2 — WORKOUTS & 7-DAY PLAN
// ----------------------------------------------------
function renderWorkoutsView() {
  const tabsContainer = document.getElementById('workout-day-tabs');
  const day = WORKOUT_DAYS.find(d => d.id === AppState.programDayId) || WORKOUT_DAYS[1];

  if (tabsContainer) {
    tabsContainer.innerHTML = '';
    WORKOUT_DAYS.forEach(d => {
      const isSelected = AppState.programDayId === d.id;
      const isToday = getTodayDayId() === d.id;
      const btn = document.createElement('button');
      btn.className = `px-3 py-1.5 rounded font-mono text-xs font-bold transition-all flex items-center gap-1 ${
        isSelected
          ? 'bg-[#E5A93C] text-black shadow'
          : 'bg-[#161B24] border border-white/[0.08] text-gray-300 hover:text-white'
      }`;
      btn.innerHTML = `
        <span>${d.name.slice(0, 3)}</span>
        ${isToday ? '<span class="w-1.5 h-1.5 rounded-sm bg-emerald-400"></span>' : ''}
      `;
      btn.onclick = () => {
        AppState.programDayId = d.id;
        renderWorkoutsView();
      };
      tabsContainer.appendChild(btn);
    });
  }

  // Update card details
  const badge = document.getElementById('prog-day-badge');
  const time = document.getElementById('prog-day-time');
  const title = document.getElementById('prog-day-title');
  const subtitle = document.getElementById('prog-day-subtitle');
  const warmup = document.getElementById('prog-warmup-text');
  const cardio = document.getElementById('prog-cardio-text');
  const warmupTitle = document.getElementById('prog-warmup-title');
  const cardioTitle = document.getElementById('prog-cardio-title');
  const exList = document.getElementById('prog-exercises-list');

  if (badge) badge.innerText = `${day.name.toUpperCase()} • ${day.badge}`;
  if (time) time.innerText = day.time.replace('&bull;', '•');
  if (title) title.innerText = day.title;
  if (subtitle) subtitle.innerText = day.subtitle;
  if (warmup) warmup.innerText = day.warmup;
  if (cardio) cardio.innerText = day.cardio;
  const runSession = day.exercises[0]?.trackType === 'run';
  if (warmupTitle) warmupTitle.innerText = runSession ? '5-Min Walk Warm-Up' : '5–8 Min Bike Warm-Up';
  if (cardioTitle) cardioTitle.innerText = runSession ? 'Run / Walk Prescription' : 'Session Guidance';

  if (exList) {
    exList.innerHTML = '';
    if (day.exercises.length === 0) {
      exList.innerHTML = `
        <div class="p-8 text-center text-gray-400 text-xs dashboard-card">
          <span class="inline-flex items-center justify-center text-emerald-400/60 mb-2">${icon('leaf', 'w-7 h-7')}</span>
          <div class="font-bold text-white text-sm mb-1">Rest & Mobility Protocol</div>
          Active recovery walk. Sleep 7–9 hours. Keep daily protein at 140–170g.
        </div>
      `;
    } else {
      day.exercises.forEach((ex, idx) => {
        const setsCount = AppState.isDeload ? Math.max(1, ex.sets - 1) : ex.sets;
        const row = document.createElement('div');
        row.className = 'p-3 rounded bg-[#161B24] border border-white/[0.06] space-y-2';
        row.innerHTML = `
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="flex items-center gap-1.5">
                <span class="text-gray-400 font-mono text-xs font-bold">#${idx + 1}</span>
                <h4 class="text-xs font-extrabold text-white">${ex.name}</h4>
              </div>
              <div class="text-[11px] text-gray-400 flex flex-wrap items-center gap-2 mt-1">
              <span class="text-amber-400 font-mono font-bold">${getExerciseTargetText(ex, setsCount)}</span>
                <span class="text-gray-600">&bull;</span>
                ${ex.rest ? `<span>Rest: ${ex.rest}s</span>` : ''}
                <span class="text-gray-600">&bull;</span>
                <span class="text-gray-400">${ex.equipment}</span>
              </div>
            </div>
          </div>

          <div class="text-[11px] text-gray-400 pt-2 border-t border-white/[0.04] leading-relaxed">
            <strong class="text-gray-300">Cue:</strong> ${ex.cues}
          </div>
        `;
        exList.appendChild(row);
      });
    }
  }
}

// ----------------------------------------------------
// 12. RENDER: VIEW 3 — TRACK SESSION (8:30 PM)
// ----------------------------------------------------
function autoSaveWorkoutSession() {
  const container = document.getElementById('tracker-exercise-cards');
  if (!container) return;

  const day = WORKOUT_DAYS.find(d => d.id === AppState.currentDayId) || WORKOUT_DAYS[1];
  if (!day) return;

  const todayStr = new Date().toISOString().slice(0, 10);
  const exerciseData = [];
  let totalSets = 0;
  let completedSets = 0;
  let hasAnyInputOrCheck = false;

  day.exercises.forEach(ex => {
    const rows = container.querySelectorAll(`.set-row[data-exercise-id="${ex.id}"]`);
    const sets = Array.from(rows).map(r => {
      const weightRaw = r.querySelector('.input-weight')?.value?.trim();
      const repsRaw = r.querySelector('.input-reps')?.value?.trim();
      const durationRaw = r.querySelector('.input-duration')?.value?.trim();
      const durationLeftRaw = r.querySelector('.input-duration-left')?.value?.trim();
      const durationRightRaw = r.querySelector('.input-duration-right')?.value?.trim();
      const distanceRaw = r.querySelector('.input-distance')?.value?.trim();
      const isDone = r.querySelector('.btn-check-set')?.classList.contains('bg-emerald-500') || false;

      totalSets++;
      if (isDone) completedSets++;
      if (weightRaw !== '' && weightRaw !== undefined) hasAnyInputOrCheck = true;
      if (repsRaw !== '' && repsRaw !== undefined) hasAnyInputOrCheck = true;
      if (durationRaw !== '' && durationRaw !== undefined) hasAnyInputOrCheck = true;
      if (durationLeftRaw !== '' && durationLeftRaw !== undefined) hasAnyInputOrCheck = true;
      if (durationRightRaw !== '' && durationRightRaw !== undefined) hasAnyInputOrCheck = true;
      if (distanceRaw !== '' && distanceRaw !== undefined) hasAnyInputOrCheck = true;
      if (isDone) hasAnyInputOrCheck = true;

      return {
        setNum: Number(r.dataset.setNum),
        weight: (weightRaw !== '' && weightRaw !== undefined) ? Number(weightRaw) : '',
        reps: (repsRaw !== '' && repsRaw !== undefined) ? Number(repsRaw) : '',
        duration: (durationRaw !== '' && durationRaw !== undefined) ? Number(durationRaw) : '',
        durationLeft: (durationLeftRaw !== '' && durationLeftRaw !== undefined) ? Number(durationLeftRaw) : '',
        durationRight: (durationRightRaw !== '' && durationRightRaw !== undefined) ? Number(durationRightRaw) : '',
        distance: (distanceRaw !== '' && distanceRaw !== undefined) ? Number(distanceRaw) : '',
        completed: isDone
      };
    });
    exerciseData.push({ id: ex.id, name: ex.name, sets });
  });

  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const existingIdx = logs.findIndex(l => l.date === todayStr && l.dayId === day.id);

  const entry = {
    date: todayStr,
    timestamp: logs[existingIdx]?.timestamp || new Date().toISOString(),
    lastModified: new Date().toISOString(),
    dayId: day.id,
    dayName: day.name,
    inProgress: true,
    totalSets,
    completedSets,
    exercises: exerciseData
  };

  if (existingIdx >= 0) logs[existingIdx] = { ...logs[existingIdx], ...entry };
  else logs.unshift(entry);

  saveStorage(STORAGE_KEYS.LOGS, logs);

  if (hasAnyInputOrCheck) {
    saveStorage(STORAGE_KEYS.ACTIVE_DRAFT, {
      dayId: day.id,
      date: todayStr,
      timestamp: Date.now(),
      completedSets,
      totalSets
    });
  }

  const indicator = document.getElementById('tracker-save-indicator');
  if (indicator) {
    const now = new Date();
    indicator.innerText = `● Auto-saved ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
    indicator.classList.remove('hidden');
  }
}

function resumeActiveWorkoutSession(dayId) {
  if (dayId) AppState.currentDayId = dayId;
  switchNavTab('tracker');
  showToast('Resumed your workout session right where you left off.', 'success');
}

function resetActiveWorkoutSession() {
  if (!confirm('Are you sure you want to reset and clear today\'s in-progress workout sets?')) return;
  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  const filtered = logs.filter(l => !(l.date === todayStr && l.dayId === AppState.currentDayId));
  saveStorage(STORAGE_KEYS.LOGS, filtered);
  saveStorage(STORAGE_KEYS.ACTIVE_DRAFT, null);
  showToast('In-progress workout session cleared.', 'info');
  renderDashboardView();
  if (AppState.activeNav === 'tracker') renderTrackerView();
}

function renderTrackerView() {
  const day = WORKOUT_DAYS.find(d => d.id === AppState.currentDayId) || WORKOUT_DAYS[1];
  const tag = document.getElementById('tracker-day-tag');
  const title = document.getElementById('tracker-title');
  const subtitle = document.getElementById('tracker-subtitle');
  const container = document.getElementById('tracker-exercise-cards');

  if (tag) tag.innerText = `${day.name.toUpperCase()} • ${day.badge}`;
  if (title) title.innerText = `${day.title}`;
  if (subtitle) subtitle.innerText = `${day.time} • ${day.subtitle}`;
  const runSession = day.exercises[0]?.trackType === 'run';
  const restSession = day.exercises.length === 0;
  const warmupCard = document.getElementById('warmup-timer-card');
  const cardioCard = document.getElementById('cardio-timer-card');
  const warmupText = document.getElementById('tracker-warmup-text');
  if (warmupCard) warmupCard.classList.toggle('hidden', runSession || restSession);
  if (cardioCard) cardioCard.classList.add('hidden');
  if (warmupText) warmupText.innerText = day.warmup;

  if (!container) return;
  container.innerHTML = '';

  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  const existingLog = logs.find(l => l.date === todayStr && l.dayId === day.id);

  day.exercises.forEach((ex, exIdx) => {
    const setsCount = AppState.isDeload ? Math.max(1, ex.sets - 1) : ex.sets;
    const card = document.createElement('div');
    card.className = 'dashboard-card p-4 space-y-3';

    let setsRowsHtml = '';
    for (let s = 1; s <= setsCount; s++) {
      const prevSet = existingLog?.exercises?.find(e => e.id === ex.id)?.sets?.find(st => st.setNum === s);
      const prevWeight = (prevSet?.weight !== undefined && prevSet?.weight !== null) ? prevSet.weight : '';
      const prevReps = (prevSet?.reps !== undefined && prevSet?.reps !== null) ? prevSet.reps : '';
      const prevDuration = (prevSet?.duration !== undefined && prevSet?.duration !== null) ? prevSet.duration : '';
      const prevDurationLeft = (prevSet?.durationLeft !== undefined && prevSet?.durationLeft !== null) ? prevSet.durationLeft : '';
      const prevDurationRight = (prevSet?.durationRight !== undefined && prevSet?.durationRight !== null) ? prevSet.durationRight : '';
      const prevDistance = (prevSet?.distance !== undefined && prevSet?.distance !== null) ? prevSet.distance : '';
      const isDone = prevSet?.completed || false;

      let logFieldsHtml = '';
      if (ex.trackType === 'run') {
        logFieldsHtml = `
          <div class="relative flex-1"><input type="number" min="0" step="1" placeholder="minutes" value="${prevDuration}" class="input-duration w-full py-2 px-2.5 rounded bg-[#0C0E12] border border-white/10 text-white font-mono font-bold text-center text-xs focus:outline-none focus:border-amber-400" /><span class="absolute right-2 top-2 text-[9px] text-gray-500 pointer-events-none">MIN</span></div>
          <div class="relative flex-1"><input type="number" min="0" step="0.1" placeholder="km (optional)" value="${prevDistance}" class="input-distance w-full py-2 px-2.5 rounded bg-[#0C0E12] border border-white/10 text-white font-mono font-bold text-center text-xs focus:outline-none focus:border-amber-400" /><span class="absolute right-2 top-2 text-[9px] text-gray-500 pointer-events-none">KM</span></div>`;
      } else if (ex.trackType === 'hold') {
        logFieldsHtml = ex.isPerLeg
          ? `<div class="relative flex-1"><input type="number" min="0" step="1" placeholder="left sec" value="${prevDurationLeft}" class="input-duration-left w-full py-2 px-2.5 rounded bg-[#0C0E12] border border-white/10 text-white font-mono font-bold text-center text-xs focus:outline-none focus:border-amber-400" /><span class="absolute right-2 top-2 text-[9px] text-gray-500 pointer-events-none">L SEC</span></div><div class="relative flex-1"><input type="number" min="0" step="1" placeholder="right sec" value="${prevDurationRight}" class="input-duration-right w-full py-2 px-2.5 rounded bg-[#0C0E12] border border-white/10 text-white font-mono font-bold text-center text-xs focus:outline-none focus:border-amber-400" /><span class="absolute right-2 top-2 text-[9px] text-gray-500 pointer-events-none">R SEC</span></div>`
          : `<div class="relative flex-1"><input type="number" min="0" step="1" placeholder="seconds" value="${prevDuration}" class="input-duration w-full py-2 px-2.5 rounded bg-[#0C0E12] border border-white/10 text-white font-mono font-bold text-center text-xs focus:outline-none focus:border-amber-400" /><span class="absolute right-2 top-2 text-[9px] text-gray-500 pointer-events-none">SEC</span></div>`;
      } else if (ex.weighted === false) {
        logFieldsHtml = `<div class="relative flex-1"><input type="number" min="0" step="1" placeholder="reps${ex.isPerLeg ? '/side' : ''}" value="${prevReps}" class="input-reps w-full py-2 px-2.5 rounded bg-[#0C0E12] border border-white/10 text-white font-mono font-bold text-center text-xs focus:outline-none focus:border-amber-400" /><span class="absolute right-2 top-2 text-[9px] text-gray-500 pointer-events-none">REPS</span></div>`;
      } else {
        logFieldsHtml = `
          <div class="relative flex-1"><input type="number" min="0" step="0.5" placeholder="kg" value="${prevWeight}" class="input-weight w-full py-2 px-2.5 rounded bg-[#0C0E12] border border-white/10 text-white font-mono font-bold text-center text-xs focus:outline-none focus:border-amber-400" /><span class="absolute right-2 top-2 text-[9px] text-gray-500 pointer-events-none">KG</span></div>
          <div class="relative flex-1"><input type="number" min="0" step="1" placeholder="reps${ex.isPerLeg ? '/side' : ''}" value="${prevReps}" class="input-reps w-full py-2 px-2.5 rounded bg-[#0C0E12] border border-white/10 text-white font-mono font-bold text-center text-xs focus:outline-none focus:border-amber-400" /><span class="absolute right-2 top-2 text-[9px] text-gray-500 pointer-events-none">REPS</span></div>`;
      }

      setsRowsHtml += `
        <div class="set-row flex items-center gap-2 py-2 border-b border-white/[0.04] last:border-b-0 text-xs" data-exercise-id="${ex.id}" data-set-num="${s}">
          <span class="w-6 font-mono font-bold text-gray-400">#${s}</span>
          <div class="flex-1 flex items-center gap-2">${logFieldsHtml}</div>
          <!-- Square Set Completion Button -->
          <button class="btn-check-set w-9 h-9 rounded flex items-center justify-center transition-all ${
            isDone ? 'bg-emerald-500 text-black' : 'btn-dark'
          }">
            ${icon('check', 'w-4 h-4')}
          </button>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="pb-2 border-b border-white/[0.06]">
        <div>
          <h4 class="text-xs font-extrabold text-white">${ex.name}</h4>
          <span class="text-[10px] text-amber-400 font-mono font-semibold">${getExerciseTargetText(ex, setsCount)}${ex.rest ? ` • ${ex.rest}s rest` : ''}</span>
        </div>
        ${ex.cues ? `<p class="text-[10.5px] text-gray-400 leading-relaxed mt-1.5">${ex.cues}</p>` : ''}
      </div>

      <div class="space-y-0.5">${setsRowsHtml}</div>
      <div id="prog-alert-${ex.id}" class="mt-2 text-[11px] p-2.5 rounded hidden"></div>
    `;

    container.appendChild(card);

    // Exercise-to-Exercise Transition Rest Divider
    if (exIdx < day.exercises.length - 1) {
      const nextEx = day.exercises[exIdx + 1];
      const transCard = document.createElement('div');
      transCard.className = 'flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 rounded bg-[#161B24]/90 border border-white/[0.05] shadow-inner';
      transCard.innerHTML = `
        <div class="flex items-center gap-2.5 text-xs">
          <span class="text-base">⏭️</span>
          <span class="text-gray-300">Finished ${ex.name}? Rest before <strong class="text-amber-400 font-bold">${nextEx.name}</strong></span>
        </div>
        <button onclick="startRestTimer(120, 'Transition: ${ex.name} → ${nextEx.name}')" class="px-3.5 py-1.5 rounded btn-dark text-xs font-mono font-bold text-amber-400 border border-amber-500/25 hover:bg-amber-500/15 flex items-center justify-center gap-1.5 transition-colors">
          <span class="flex items-center gap-1.5">${icon('timer', 'w-3.5 h-3.5')}Start 120s Transition Rest</span>
        </button>
      `;
      container.appendChild(transCard);
    }
  });

  // Attach live auto-save input listeners across all weight & reps fields
  container.querySelectorAll('.input-weight, .input-reps, .input-duration, .input-duration-left, .input-duration-right, .input-distance').forEach(input => {
    input.addEventListener('input', () => autoSaveWorkoutSession());
    input.addEventListener('change', () => autoSaveWorkoutSession());
  });

  // Attach button events with immediate auto-save
  container.querySelectorAll('.btn-check-set').forEach(btn => {
    btn.onclick = (e) => {
      const row = e.target.closest('.set-row');
      const exId = row.dataset.exerciseId;
      const setNum = row.dataset.setNum;
      const isDone = btn.classList.contains('bg-emerald-500');

      if (!isDone) {
        btn.className = 'btn-check-set w-9 h-9 rounded flex items-center justify-center text-xs font-bold bg-emerald-500 text-black font-extrabold transition-all';
        triggerHaptic('tap');

        const ex = day.exercises.find(e => e.id === exId);
        if (ex?.rest > 0) startRestTimer(ex.rest, `${ex.name} — Set #${setNum} complete`);
      } else {
        btn.className = 'btn-check-set w-9 h-9 rounded flex items-center justify-center text-xs font-bold btn-dark transition-all';
      }

      // Check double progression
      const allRows = container.querySelectorAll(`.set-row[data-exercise-id="${exId}"]`);
      const workingSets = Array.from(allRows).map(r => ({
        setNum: Number(r.dataset.setNum),
        weight: Number(r.querySelector('.input-weight')?.value) || 0,
        reps: Number(r.querySelector('.input-reps')?.value) || 0,
        completed: r.querySelector('.btn-check-set').classList.contains('bg-emerald-500')
      }));

      const res = checkDoubleProgression(exId, workingSets);
      const banner = document.getElementById(`prog-alert-${exId}`);
      if (banner && res) {
        banner.innerHTML = res.msg;
        banner.className = `mt-2 text-[11px] p-2.5 rounded ${
          res.type === 'PROGRESSED' 
            ? 'bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 font-bold' 
            : 'bg-amber-950/70 border border-amber-500/50 text-amber-300'
        }`;
        banner.classList.remove('hidden');
      }

      // Immediate auto-save to storage
      autoSaveWorkoutSession();
    };
  });
}

function saveActiveWorkoutSession() {
  const container = document.getElementById('tracker-exercise-cards');
  if (!container) return;

  const day = WORKOUT_DAYS.find(d => d.id === AppState.currentDayId) || WORKOUT_DAYS[1];
  if (!day) return;

  const todayStr = new Date().toISOString().slice(0, 10);
  const exerciseData = [];
  let totalSets = 0;
  let completedSets = 0;

  day.exercises.forEach(ex => {
    const rows = container.querySelectorAll(`.set-row[data-exercise-id="${ex.id}"]`);
    const sets = Array.from(rows).map(r => {
      const weightVal = r.querySelector('.input-weight')?.value?.trim();
      const repsVal = r.querySelector('.input-reps')?.value?.trim();
      const durationVal = r.querySelector('.input-duration')?.value?.trim();
      const durationLeftVal = r.querySelector('.input-duration-left')?.value?.trim();
      const durationRightVal = r.querySelector('.input-duration-right')?.value?.trim();
      const distanceVal = r.querySelector('.input-distance')?.value?.trim();
      const isDone = r.querySelector('.btn-check-set')?.classList.contains('bg-emerald-500') || false;

      totalSets++;
      if (isDone) completedSets++;

      return {
        setNum: Number(r.dataset.setNum),
        weight: (weightVal !== '' && weightVal !== undefined) ? Number(weightVal) : '',
        reps: (repsVal !== '' && repsVal !== undefined) ? Number(repsVal) : '',
        duration: (durationVal !== '' && durationVal !== undefined) ? Number(durationVal) : '',
        durationLeft: (durationLeftVal !== '' && durationLeftVal !== undefined) ? Number(durationLeftVal) : '',
        durationRight: (durationRightVal !== '' && durationRightVal !== undefined) ? Number(durationRightVal) : '',
        distance: (distanceVal !== '' && distanceVal !== undefined) ? Number(distanceVal) : '',
        completed: isDone
      };
    });
    exerciseData.push({ id: ex.id, name: ex.name, sets });
  });

  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const existingIdx = logs.findIndex(l => l.date === todayStr && l.dayId === day.id);

  const entry = {
    date: todayStr,
    timestamp: logs[existingIdx]?.timestamp || new Date().toISOString(),
    completedAt: new Date().toISOString(),
    dayId: day.id,
    dayName: day.name,
    inProgress: false,
    totalSets,
    completedSets,
    exercises: exerciseData
  };

  if (existingIdx >= 0) logs[existingIdx] = entry;
  else logs.unshift(entry);

  saveStorage(STORAGE_KEYS.LOGS, logs);
  saveStorage(STORAGE_KEYS.ACTIVE_DRAFT, null);

  // Persist the finished session into the permanent database table
  // (IndexedDB, with an automatic localStorage fallback).
  const record = buildSessionRecord(entry, day);
  if (record.exercises.length > 0) {
    dbPutSession(record);
  }

  // Auto-check "8:30 PM Workout Session" in Today's Transformation Checklist!
  let todayChecklist = getTodayChecklistState();
  if (!todayChecklist.includes('chk_workout')) {
    todayChecklist.push('chk_workout');
    saveTodayChecklistState(todayChecklist);
    renderTodayChecklist();
  }

  triggerHaptic('success');
  playDing();
  showToast('Workout session finished and logged.', 'success');
  switchNavTab('dashboard');
}

// ----------------------------------------------------
// 13. RENDER: VIEW 4 — PROGRESS & METRICS
// ----------------------------------------------------
function calculateRollingAvg() {
  const list = loadStorage(STORAGE_KEYS.WEIGH_INS, []);
  if (list.length === 0) return 94.5;
  const recent = list.slice(0, 7);
  const sum = recent.reduce((acc, curr) => acc + Number(curr.weight), 0);
  return (sum / recent.length).toFixed(1);
}

function renderProgressView() {
  const list = loadStorage(STORAGE_KEYS.WEIGH_INS, []);
  const avg = calculateRollingAvg();
  const startWeight = 94.5;
  const targetWeight = 85.0;
  const totalLost = (startWeight - avg).toFixed(1);
  const pct = Math.min(100, Math.max(0, ((totalLost / (startWeight - targetWeight)) * 100).toFixed(0)));

  const badge = document.getElementById('metric-total-loss-badge');
  const bar = document.getElementById('progress-bar-fill');
  const pctLabel = document.getElementById('progress-percent-label');
  const avgDisplay = document.getElementById('metric-rolling-avg-val');
  const historyList = document.getElementById('metrics-recent-history');

  if (badge) badge.innerText = `${totalLost > 0 ? `-${totalLost}` : totalLost} kg Total`;
  if (bar) bar.style.width = `${pct}%`;
  if (pctLabel) pctLabel.innerText = `${pct}% Achieved (${(avg - targetWeight).toFixed(1)} kg to go)`;
  if (avgDisplay) avgDisplay.innerText = `${avg} kg`;

  if (historyList) {
    historyList.innerHTML = '';
    if (list.length === 0) {
      historyList.innerHTML = '<p class="text-gray-500 text-xs">No weigh-ins logged yet. Log 3–4 mornings weekly to track rolling average.</p>';
    } else {
      list.slice(0, 7).forEach(item => {
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between p-2 rounded bg-[#161B24] border border-white/[0.04]';
        row.innerHTML = `
          <span class="text-gray-400 font-mono text-xs">${item.date}</span>
          <span class="font-extrabold text-white font-mono text-xs">${item.weight} kg</span>
        `;
        historyList.appendChild(row);
      });
    }
  }

  renderRecoveryLogs();
  renderSessionHistory();
}

// ----------------------------------------------------
// 13B. RECOVERY & BODY LOGS (from Quick Entry tiles)
// ----------------------------------------------------
function renderRecoveryLogs() {
  const container = document.getElementById('recovery-logs-container');
  if (!container) return;

  const protein = loadStorage(STORAGE_KEYS.PROTEIN, {});
  const water = loadStorage(STORAGE_KEYS.WATER, {});
  const sleep = loadStorage(STORAGE_KEYS.SLEEP, {});
  const waist = loadStorage(STORAGE_KEYS.WAIST, []);

  const mapRows = (obj, unit) => {
    const keys = Object.keys(obj).sort((a, b) => b.localeCompare(a)).slice(0, 3);
    if (keys.length === 0) return '<span class="text-gray-500 text-[10px]">No entries yet</span>';
    return keys.map(k => `
      <div class="flex items-center justify-between">
        <span class="text-gray-500 font-mono text-[10px]">${k}</span>
        <span class="text-gray-200 font-mono text-[10px]">${obj[k]}${unit}</span>
      </div>
    `).join('');
  };

  const waistRows = waist.length === 0
    ? '<span class="text-gray-500 text-[10px]">No entries yet</span>'
    : waist.slice(0, 3).map(w => `
      <div class="flex items-center justify-between">
        <span class="text-gray-500 font-mono text-[10px]">${w.date}</span>
        <span class="text-gray-200 font-mono text-[10px]">${w.waist}</span>
      </div>
    `).join('');

  const panels = [
    { title: 'Protein', icon: 'protein', rows: mapRows(protein, ' g') },
    { title: 'Water', icon: 'droplet', rows: mapRows(water, ' L') },
    { title: 'Sleep', icon: 'moon', rows: mapRows(sleep, ' h') },
    { title: 'Waist', icon: 'ruler', rows: waistRows }
  ];

  container.innerHTML = panels.map(p => `
    <div class="p-3 rounded bg-[#161B24] border border-white/[0.06]">
      <div class="flex items-center gap-1.5 mb-2">
        <span class="text-amber-400/80">${icon(p.icon, 'w-3.5 h-3.5')}</span>
        <span class="text-[10px] uppercase font-bold tracking-wider text-gray-400">${p.title}</span>
      </div>
      <div class="space-y-1">${p.rows}</div>
    </div>
  `).join('');
}

// ----------------------------------------------------
// 13C. SESSION HISTORY (reads from the database)
// ----------------------------------------------------
let _sessionCache = {};

async function renderSessionHistory() {
  const container = document.getElementById('session-history-container');
  const summary = document.getElementById('session-history-summary');
  if (!container) return;

  const sessions = await dbGetAllSessions();
  sessions.sort((a, b) => (b.date + (b.completedAt || '')).localeCompare(a.date + (a.completedAt || '')));

  _sessionCache = {};
  sessions.forEach(s => { _sessionCache[s.id] = s; });

  if (summary) {
    if (sessions.length) {
      const totalVol = sessions.reduce((acc, s) => acc + (s.volume || 0), 0);
      summary.innerText = `${sessions.length} session${sessions.length > 1 ? 's' : ''} stored • ${totalVol.toLocaleString()} kg total volume lifted`;
    } else {
      summary.innerText = '';
    }
  }

  if (sessions.length === 0) {
    container.innerHTML = '<p class="text-gray-500 text-xs">No finished sessions yet. Complete a workout and it will be saved here automatically.</p>';
    return;
  }

  container.innerHTML = '';
  sessions.forEach(s => {
    const row = document.createElement('div');
    row.className = 'rounded bg-[#161B24] border border-white/[0.04] overflow-hidden';
    row.innerHTML = `
      <button class="w-full flex items-center justify-between gap-3 p-3 text-left hover:bg-white/[0.03] transition-colors" onclick="toggleSessionDetail('${s.id}')">
        <div class="min-w-0">
          <div class="font-bold text-white text-xs truncate">${s.dayName}: ${s.title}</div>
          <div class="text-[10.5px] text-gray-400 font-mono mt-0.5">${s.date}</div>
        </div>
        <div class="text-right flex-shrink-0">
          <div class="text-emerald-400 font-mono font-bold text-xs">${s.completedSets}/${s.totalSets} sets</div>
          <div class="text-[10px] text-gray-500 font-mono">${(s.volume || 0).toLocaleString()} kg • ${s.exercises.length} ex</div>
        </div>
      </button>
      <div id="session-detail-${s.id}" class="hidden px-3 pb-3 pt-2 space-y-2 border-t border-white/[0.04]"></div>
    `;
    container.appendChild(row);
  });
}

function toggleSessionDetail(id) {
  const el = document.getElementById(`session-detail-${id}`);
  if (!el) return;
  if (el.classList.contains('hidden')) {
    if (!el.dataset.filled) {
      el.innerHTML = sessionDetailHtml(_sessionCache[id]);
      el.dataset.filled = '1';
    }
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}

function sessionDetailHtml(session) {
  if (!session || !session.exercises.length) return '<p class="text-gray-500 text-[11px]">No sets recorded.</p>';
  return session.exercises.map(e => `
    <div>
      <div class="text-[11px] font-bold text-white mb-1">${e.name}</div>
      <div class="space-y-0.5">
        ${e.sets.map(st => {
          const parts = [];
          if (st.weight !== '' && st.weight !== undefined && st.weight !== null) parts.push(`${st.weight} kg`);
          if (st.reps !== '' && st.reps !== undefined && st.reps !== null) parts.push(`${st.reps} reps`);
          if (st.duration) parts.push(`${st.duration}s`);
          if (st.durationLeft || st.durationRight) parts.push(`${st.durationLeft || 0}s L / ${st.durationRight || 0}s R`);
          if (st.distance) parts.push(`${st.distance} km`);
          return `<div class="flex items-center justify-between text-[10.5px] text-gray-400 font-mono">
            <span>Set ${st.setNum}</span>
            <span class="inline-flex items-center gap-1">${parts.join(' × ') || '—'} ${st.completed ? icon('check', 'w-3 h-3 text-emerald-400') : ''}</span>
          </div>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ----------------------------------------------------
// 13D. EXPORT (CSV / JSON "table files")
// ----------------------------------------------------
function csvCell(v) {
  const s = String(v === undefined || v === null ? '' : v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function downloadFile(filename, content, mime) {
  try {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast(`Exported ${filename}`, 'success');
  } catch (e) {
    showToast('Export failed on this browser.', 'warning');
  }
}

async function exportSessionCSV() {
  const sessions = await dbGetAllSessions();
  if (!sessions.length) { showToast('No sessions to export yet.', 'info'); return; }
  sessions.sort((a, b) => a.date.localeCompare(b.date));

  const rows = [['Date', 'Workout', 'Exercise', 'Set', 'Weight (kg)', 'Reps', 'Duration (s)', 'Distance (km)', 'Completed']];
  sessions.forEach(s => {
    (s.exercises || []).forEach(e => {
      (e.sets || []).forEach(st => {
        rows.push([
          s.date,
          `${s.dayName} ${s.title}`.trim(),
          e.name,
          st.setNum,
          st.weight,
          st.reps,
          st.duration || st.durationLeft || '',
          st.distance,
          st.completed ? 'Yes' : 'No'
        ]);
      });
    });
  });

  downloadFile('myfit-sessions.csv', rows.map(r => r.map(csvCell).join(',')).join('\n'), 'text/csv');
}

async function exportSessionJSON() {
  const sessions = await dbGetAllSessions();
  if (!sessions.length) { showToast('No sessions to export yet.', 'info'); return; }
  sessions.sort((a, b) => a.date.localeCompare(b.date));
  downloadFile('myfit-sessions.json', JSON.stringify(sessions, null, 2), 'application/json');
}

function handleWeightSubmit() {
  const input = document.getElementById('input-weight-entry');
  if (!input || !input.value) return;
  const val = Number(input.value);
  if (val <= 0) return;

  const list = loadStorage(STORAGE_KEYS.WEIGH_INS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  const existing = list.findIndex(w => w.date === todayStr);

  if (existing >= 0) list[existing].weight = val;
  else list.unshift({ date: todayStr, weight: val });

  saveStorage(STORAGE_KEYS.WEIGH_INS, list);
  input.value = '';
  showToast(`Logged weigh-in: ${val} kg`, 'success');
  renderProgressView();
}

// ----------------------------------------------------
// 15. QUICK LOG CONTROLLERS (Square Tiles)
// ----------------------------------------------------
function quickLogItem(type) {
  if (type === 'weight') {
    const cur = calculateRollingAvg();
    const entry = prompt('Morning weigh-in (kg):', cur);
    if (entry !== null && entry.trim() !== '') {
      const val = parseFloat(entry);
      if (!isNaN(val) && val > 0) {
        const list = loadStorage(STORAGE_KEYS.WEIGH_INS, []);
        const todayStr = new Date().toISOString().slice(0, 10);
        const existing = list.findIndex(w => w.date === todayStr);
        if (existing >= 0) list[existing].weight = val;
        else list.unshift({ date: todayStr, weight: val });
        saveStorage(STORAGE_KEYS.WEIGH_INS, list);
        triggerHaptic('success');
        showToast(`Logged ${val} kg — rolling average updated.`, 'success');
        renderDashboardView();
        renderProgressView();
      }
    }
  } else if (type === 'protein') {
    const entry = prompt('Log Protein intake today (grams):', '155');
    if (entry !== null && entry.trim() !== '') {
      const val = parseInt(entry, 10);
      if (!isNaN(val) && val > 0) {
        const store = loadStorage(STORAGE_KEYS.PROTEIN, {});
        const todayStr = new Date().toISOString().slice(0, 10);
        store[todayStr] = val;
        saveStorage(STORAGE_KEYS.PROTEIN, store);
        triggerHaptic('tap');
        showToast(`Logged ${val} g protein (goal 140–170 g)`, 'success');
        renderRecoveryLogs();
      }
    }
  } else if (type === 'waist') {
    const entry = prompt('Enter waist measurement (e.g. 96 cm or 38 in):', '96 cm');
    if (entry !== null && entry.trim() !== '') {
      const store = loadStorage(STORAGE_KEYS.WAIST, []);
      const todayStr = new Date().toISOString().slice(0, 10);
      store.unshift({ date: todayStr, waist: entry });
      saveStorage(STORAGE_KEYS.WAIST, store);
      triggerHaptic('tap');
      showToast(`Waist logged: ${entry}`, 'success');
      renderRecoveryLogs();
    }
  } else if (type === 'water') {
    const store = loadStorage(STORAGE_KEYS.WATER, {});
    const todayStr = new Date().toISOString().slice(0, 10);
    const next = (Number(store[todayStr] || 0) + 0.25).toFixed(2);
    store[todayStr] = next;
    AppState.waterLogged = next;
    saveStorage(STORAGE_KEYS.WATER, store);
    triggerHaptic('tap');
    showToast(`+250 ml logged — daily total ${next} L`, 'success');
    renderRecoveryLogs();
  } else if (type === 'sleep') {
    const entry = prompt('Hours of sleep last night (hrs):', '7.5');
    if (entry !== null && entry.trim() !== '') {
      const val = parseFloat(entry);
      if (!isNaN(val) && val > 0) {
        const store = loadStorage(STORAGE_KEYS.SLEEP, {});
        const todayStr = new Date().toISOString().slice(0, 10);
        store[todayStr] = val;
        saveStorage(STORAGE_KEYS.SLEEP, store);
        triggerHaptic('tap');
        showToast(`Logged ${val} hours sleep — recovery prioritized.`, 'success');
        renderRecoveryLogs();
      }
    }
  }
}

// ----------------------------------------------------
// 17. WARMUP 8-MINUTE TIMER
// ----------------------------------------------------
function toggleWarmupTimer() {
  const display = document.getElementById('warmup-timer-display');
  const btn = document.getElementById('btn-warmup-toggle');
  if (!AppState.warmupRunning) {
    AppState.warmupRunning = true;
    if (btn) {
      btn.innerText = 'Pause';
      btn.className = 'px-3 py-1 rounded btn-dark text-xs font-bold';
    }
    AppState.warmupInterval = setInterval(() => {
      AppState.warmupRemaining--;
      const m = Math.floor(AppState.warmupRemaining / 60);
      const s = AppState.warmupRemaining % 60;
      if (display) display.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

      if (AppState.warmupRemaining <= 0) {
        clearInterval(AppState.warmupInterval);
        AppState.warmupRunning = false;
        playDing();
        triggerHaptic('rest');
        showToast('Warm-up complete — time to lift.', 'success');
        if (btn) {
          btn.innerText = 'Start';
          btn.className = 'px-3 py-1 rounded btn-gold text-xs font-bold';
        }
      }
    }, 1000);
  } else {
    clearInterval(AppState.warmupInterval);
    AppState.warmupRunning = false;
    if (btn) {
      btn.innerText = 'Resume';
      btn.className = 'px-3 py-1 rounded btn-gold text-xs font-bold';
    }
  }
}

// ----------------------------------------------------
// 17B. 12-15 MIN POST-LIFT CARDIO TIMER
// ----------------------------------------------------
function toggleCardioTimer() {
  const display = document.getElementById('cardio-timer-display');
  const btn = document.getElementById('btn-cardio-toggle');
  if (!AppState.cardioRunning) {
    AppState.cardioRunning = true;
    if (btn) {
      btn.innerText = 'Pause';
      btn.className = 'px-3 py-1 rounded btn-dark text-xs font-bold';
    }
    AppState.cardioInterval = setInterval(() => {
      AppState.cardioRemaining--;
      const m = Math.floor(AppState.cardioRemaining / 60);
      const s = AppState.cardioRemaining % 60;
      if (display) display.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

      if (AppState.cardioRemaining <= 0) {
        clearInterval(AppState.cardioInterval);
        AppState.cardioRunning = false;
        playDing();
        triggerHaptic('rest');
        showToast('Post-lift cardio complete — solid aerobic conditioning.', 'success');
        if (btn) {
          btn.innerText = 'Start';
          btn.className = 'px-3 py-1 rounded btn-gold text-xs font-bold';
        }
      }
    }, 1000);
  } else {
    clearInterval(AppState.cardioInterval);
    AppState.cardioRunning = false;
    if (btn) {
      btn.innerText = 'Resume';
      btn.className = 'px-3 py-1 rounded btn-gold text-xs font-bold';
    }
  }
}

// ----------------------------------------------------
// 18. LIGHT WEEK / DELOAD TOGGLE (On-demand, persisted)
// ----------------------------------------------------
function applyDeloadUI() {
  const dot = document.getElementById('deload-dot');
  const txt = document.getElementById('deload-text');
  const btn = document.getElementById('btn-deload-toggle');

  if (AppState.isDeload) {
    if (dot) dot.className = 'w-1.5 h-1.5 rounded-sm bg-amber-400';
    if (txt) txt.innerText = 'Deload: ON (-1 set)';
    if (btn) btn.className = 'text-[11px] font-semibold px-2.5 py-1.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 transition-all flex items-center gap-1.5';
  } else {
    if (dot) dot.className = 'w-1.5 h-1.5 rounded-sm bg-gray-500';
    if (txt) txt.innerText = 'Deload: OFF';
    if (btn) btn.className = 'text-[11px] font-semibold px-2.5 py-1.5 rounded bg-[#161B24] border border-white/[0.08] text-gray-300 hover:text-white transition-all flex items-center gap-1.5';
  }
}

function toggleDeload() {
  AppState.isDeload = !AppState.isDeload;
  saveStorage(STORAGE_KEYS.DELOAD, AppState.isDeload);
  applyDeloadUI();

  if (AppState.isDeload) {
    showToast('Deload ON: 1 fewer set per movement. Use when fatigued or sore.', 'warning');
  } else {
    showToast('Normal set volume restored.');
  }

  if (AppState.activeNav === 'dashboard') renderDashboardView();
  else if (AppState.activeNav === 'workouts') renderWorkoutsView();
  else if (AppState.activeNav === 'tracker') renderTrackerView();
}

// ----------------------------------------------------
// 19. FORCE REFRESH & CACHE BUSTING (Instant Android sync)
// ----------------------------------------------------
function forceAppRefresh() {
  showToast('Purging cached data and checking for the latest build…', 'info');

  if ('caches' in window) {
    caches.keys().then((names) => {
      return Promise.all(names.map((name) => caches.delete(name)));
    }).catch(() => {});
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let reg of registrations) {
        reg.unregister();
      }
    }).catch(() => {});
  }

  setTimeout(() => {
    const cleanUrl = window.location.origin + window.location.pathname + '?sync=' + Date.now();
    window.location.replace(cleanUrl);
  }, 400);
}

// ----------------------------------------------------
// 19B. THEME CONTROLLER (Dark Mode default & Creamy Light Mode)
// ----------------------------------------------------
const THEME_STORAGE_KEY = 'pumpd_theme_mode_v2';

function getStoredTheme() {
  try {
    let t = localStorage.getItem(THEME_STORAGE_KEY);
    if (!t) return 'dark';
    if (t.startsWith('"') && t.endsWith('"')) t = JSON.parse(t);
    return t === 'light' ? 'light' : 'dark';
  } catch(e) {
    return 'dark';
  }
}

function applyTheme(theme, showNotice = false) {
  const isLight = theme === 'light';
  const html = document.documentElement;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const toggleBtnIcon = document.getElementById('theme-toggle-icon');
  const toggleBtnText = document.getElementById('theme-toggle-text');
  const deskThemeIcon = document.getElementById('desk-theme-icon');
  const deskThemeLabel = document.getElementById('desk-theme-label');

  if (isLight) {
    html.classList.remove('dark');
    html.classList.add('light');
    if (themeMeta) themeMeta.setAttribute('content', '#F8F5EE');
    if (toggleBtnIcon) toggleBtnIcon.innerHTML = icon('moon', 'w-3.5 h-3.5');
    if (toggleBtnText) toggleBtnText.innerText = 'Dark';
    if (deskThemeIcon) deskThemeIcon.innerHTML = icon('moon', 'w-4 h-4');
    if (deskThemeLabel) deskThemeLabel.innerText = 'Dark Mode';
    localStorage.setItem(THEME_STORAGE_KEY, 'light');
    if (showNotice) showToast('Creamy Light Mode activated', 'info');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    if (themeMeta) themeMeta.setAttribute('content', '#0C0E12');
    if (toggleBtnIcon) toggleBtnIcon.innerHTML = icon('sun', 'w-3.5 h-3.5');
    if (toggleBtnText) toggleBtnText.innerText = 'Light';
    if (deskThemeIcon) deskThemeIcon.innerHTML = icon('sun', 'w-4 h-4');
    if (deskThemeLabel) deskThemeLabel.innerText = 'Creamy Mode';
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    if (showNotice) showToast('Obsidian Dark Mode activated', 'info');
  }
}

function toggleTheme() {
  const current = getStoredTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next, true);
  triggerHaptic('tap');
}

function initTheme() {
  const saved = getStoredTheme();
  applyTheme(saved, false);
}

// ----------------------------------------------------
// 20. INITIALIZATION & ACCIDENTAL CLOSE RECOVERY
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  AppState.isDeload = loadStorage(STORAGE_KEYS.DELOAD, false) === true;
  applyDeloadUI();
  renderProgressView();
  migrateLogsToDB();

  const lastTab = loadStorage(STORAGE_KEYS.LAST_TAB, 'dashboard');
  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  const activeLog = logs.find(l => l.date === todayStr && l.inProgress && l.exercises?.some(e => e.sets?.some(hasLoggedSetValue)));

  // If user closed or reloaded mid-workout (within last 8 hours) or was on tracker, auto-resume where they left off!
  if (activeLog && (lastTab === 'tracker' || (Date.now() - new Date(activeLog.lastModified || activeLog.timestamp).getTime() < 8 * 60 * 60 * 1000))) {
    AppState.currentDayId = activeLog.dayId;
    switchNavTab('tracker');
    showToast('Automatically resumed your in-progress workout session.', 'success');
  } else {
    switchNavTab(['workouts', 'diet', 'progress'].includes(lastTab) ? lastTab : 'dashboard');
  }

  // Restore active rest countdown if phone was locked or app was minimized
  restoreRestTimerIfActive();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      reg.update().catch(() => {});
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showToast('New update available — tap Sync or reload.', 'info');
            }
          });
        }
      });
    }).catch(() => {});
  }
});

// Auto-save on accidental close, app minimizing, locking phone, or tab switching
document.addEventListener('visibilitychange', () => {
  if (AppState.activeNav === 'tracker') {
    autoSaveWorkoutSession();
  }
  if (document.visibilityState === 'visible') {
    restoreRestTimerIfActive();
  }
});

window.addEventListener('pagehide', () => {
  if (AppState.activeNav === 'tracker') {
    autoSaveWorkoutSession();
  }
});

window.addEventListener('beforeunload', () => {
  if (AppState.activeNav === 'tracker') {
    autoSaveWorkoutSession();
  }
});
