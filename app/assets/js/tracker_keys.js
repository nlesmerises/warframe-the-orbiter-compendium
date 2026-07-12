function wfNormalizeTrackerKey(key) {
    const raw = String(key || '').trim();
    if (!raw) return '';
    return raw
        .toLowerCase()
        .replace(/^wf_+/, 'wf_')
        .replace(/[^a-z0-9_]+/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '');
}

function wfTrackerLabelFromKey(key) {
    const raw = wfNormalizeTrackerKey(key);
    if (!raw.startsWith('wf_')) return '';
    return raw
        .replace(/^wf_(standard|prime|expansion)_/i, '')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, ch => ch.toUpperCase())
        .trim();
}

function wfCollectCheckedKeys(storage = window.safeStorage) {
    const out = new Set();
    if (!storage) return out;
    const length = storage.length || 0;
    for (let i = 0; i < length; i++) {
        const key = storage.key(i);
        const normalized = wfNormalizeTrackerKey(key);
        if (!normalized.startsWith('wf_')) continue;
        const value = storage.getItem(key);
        if (String(value).toLowerCase() === 'true') out.add(normalized);
    }
    return out;
}

function wfIsOwnedPartKey(key) {
    const normalized = wfNormalizeTrackerKey(key);
    if (!normalized.startsWith('wf_')) return false;
    return !/(?:_completed|_building|_lvl30)$/.test(normalized);
}
