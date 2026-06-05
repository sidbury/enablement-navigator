'use client';

import { useState } from 'react';
import { ASSETS, SCENARIOS, ASSET_TYPES, CATEGORIES, type Asset } from '@/data/assets';

type Role = 'sales' | 'cs';
type Priority = 'Gold' | 'Silver' | 'Bronze' | '';

function formatDate(d: string | null): string {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

function PriorityLabel({ p }: { p: string | null }) {
  if (!p) return <span style={{ color: 'var(--text-tertiary)', fontSize: 12 }}>—</span>;
  const icon = p === 'Gold' ? '🥇' : p === 'Silver' ? '🥈' : '🥉';
  const cls = p === 'Gold' ? 'prio-gold' : p === 'Silver' ? 'prio-silver' : 'prio-bronze';
  return <span className={cls}>{icon} {p}</span>;
}

function AssetCard({ id, asset, expanded, onToggle }: {
  id: string; asset: Asset; expanded: boolean; onToggle: () => void;
}) {
  const isDeprecated = asset.status === 'deprecated';
  const isNeedsReview = asset.status === 'needs-review';
  const statusBadge = isDeprecated
    ? <span className="tag tag-negative">Deprecated</span>
    : isNeedsReview
      ? <span className="tag tag-warning">Needs review</span>
      : <span className="tag tag-positive">Current</span>;

  return (
    <div
      className={`asset-card${expanded ? ' expanded' : ''}${isDeprecated ? ' deprecated' : ''}`}
      onClick={onToggle}
    >
      <div className="asset-card-top">
        <div className="asset-name">{asset.name}</div>
        <div className="asset-badges">
          <span className={`tag ${asset.typeStyle}`}>{asset.type}</span>
          <span className="asset-chevron">
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="2 4 6 8 10 4" />
            </svg>
          </span>
        </div>
      </div>
      <p className="asset-desc">{asset.desc}</p>
      <div className="asset-footer">
        <div className="asset-status">{statusBadge}</div>
        <a
          href={asset.url}
          className="open-link"
          target="_blank"
          rel="noreferrer"
          onClick={e => e.stopPropagation()}
        >
          Open in Notion
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 10L10 2M5 2h5v5" />
          </svg>
        </a>
      </div>
      {expanded && (
        <div className="asset-detail">
          <div className="detail-row">
            <span className="detail-label">Asset type</span>
            <span className="detail-value">{asset.type}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Category</span>
            <span className="detail-value">{asset.category?.join(', ') || '—'}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Owner</span>
            <span className="detail-value">{asset.owner || '—'}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Last reviewed</span>
            <span className="detail-value">{formatDate(asset.lastReviewed)}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Review priority</span>
            <span className="detail-value"><PriorityLabel p={asset.reviewPrio} /></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [role, setRole] = useState<Role>('sales');
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);
  const [expandedAsset, setExpandedAsset] = useState<string | null>(null);
  const [filterType, setFilterType] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterPrio, setFilterPrio] = useState<Priority>('');

  const scenarios = SCENARIOS[role];
  const selectedScenario = scenarios.find(s => s.id === selectedScenarioId) ?? null;

  const pool = selectedScenario ? selectedScenario.assets : Object.keys(ASSETS);
  const hasFilter = filterType || filterCategory || filterPrio;

  const matched = (selectedScenario || hasFilter) ? pool.filter(id => {
    const a = ASSETS[id];
    if (!a) return false;
    if (filterType && a.type !== filterType) return false;
    if (filterCategory && !a.category?.includes(filterCategory)) return false;
    if (filterPrio && a.reviewPrio !== filterPrio) return false;
    return true;
  }) : [];

  const showResults = selectedScenario || (hasFilter && matched.length > 0);

  function handleRoleChange(r: Role) {
    setRole(r);
    setSelectedScenarioId(null);
    setExpandedAsset(null);
  }

  function handleScenarioSelect(id: string) {
    setSelectedScenarioId(prev => prev === id ? null : id);
    setExpandedAsset(null);
  }

  function handleAssetToggle(id: string) {
    setExpandedAsset(prev => prev === id ? null : id);
  }

  return (
    <>
      <header className="header">
        <div className="header-left">
          <svg className="zh-logo" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="200" fill="#FF4852" />
            <path d="M201.86 101.913L112.367 96L106.454 185.493L195.947 191.406L201.86 101.913Z" fill="white" />
            <path d="M193.668 223.006L212.259 135.265L300 153.856L193.668 223.006Z" fill="white" />
            <path d="M236.088 302.736C260.852 302.736 280.928 282.66 280.928 257.896C280.928 233.132 260.852 213.056 236.088 213.056C211.324 213.056 191.248 233.132 191.248 257.896C191.248 282.66 211.324 302.736 236.088 302.736Z" fill="white" />
            <path d="M195.968 191.382C146.571 187.781 103.601 224.91 100 274.307L189.447 280.829L195.968 191.382Z" fill="white" />
          </svg>
          <span className="header-title">Enablement Navigator</span>
          <div className="header-divider" />
          <span className="header-sub">Find the right asset for any situation</span>
        </div>
        <a href="https://www.notion.so/30a523d064a380de983ae2df3bfd6546" className="header-link" target="_blank" rel="noreferrer">
          Browse all assets
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 6h8M6 2l4 4-4 4" />
          </svg>
        </a>
      </header>

      <div className="body">
        <div className="left-panel">
          <div className="left-scroll">
            <div className="role-toggle" role="tablist">
              {(['sales', 'cs'] as Role[]).map((r, i) => (
                <button
                  key={r}
                  className={`role-btn${role === r ? ' active' : ''}`}
                  onClick={() => handleRoleChange(r)}
                  role="tab"
                  aria-selected={role === r}
                >
                  {i === 0 ? 'Sales / AE' : 'Customer Success'}
                </button>
              ))}
            </div>

            <div className="section-label">Pick your situation</div>
            <div className="scenario-grid">
              {scenarios.map(s => (
                <div
                  key={s.id}
                  className={`scenario-card${selectedScenarioId === s.id ? ' selected' : ''}`}
                  onClick={() => handleScenarioSelect(s.id)}
                >
                  <span className="scenario-card-icon">{s.icon}</span>
                  <div className="scenario-card-title">{s.title}</div>
                  <div className="scenario-card-count"><span>{s.assets.length}</span> assets</div>
                </div>
              ))}
            </div>

            <div className="divider" />

            <div className="section-label">Refine results</div>
            <div className="filter-body">
              <div className="filter-group">
                <label htmlFor="f-type">Asset type</label>
                <select id="f-type" value={filterType} onChange={e => setFilterType(e.target.value)}>
                  <option value="">Any type</option>
                  {ASSET_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="f-category">Enablement category</label>
                <select id="f-category" value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
                  <option value="">Any category</option>
                  {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="f-prio">Review priority</label>
                <select id="f-prio" value={filterPrio} onChange={e => setFilterPrio(e.target.value as Priority)}>
                  <option value="">Any priority</option>
                  <option value="Gold">🥇 Gold</option>
                  <option value="Silver">🥈 Silver</option>
                  <option value="Bronze">🥉 Bronze</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="right-panel">
          {!showResults ? (
            <div className="empty-state">
              <div className="empty-icon">
                {matched.length === 0 && !!hasFilter ? (
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, color: 'var(--text-tertiary)' }}>
                    <circle cx="10" cy="10" r="7" /><path d="M7 10h6" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, color: 'var(--text-tertiary)' }}>
                    <circle cx="10" cy="10" r="7" /><path d="M7 10h6M10 7v6" />
                  </svg>
                )}
              </div>
              <p className="empty-title">
                {matched.length === 0 && !!hasFilter ? 'No assets for this combination' : 'Pick a situation'}
              </p>
              <p className="empty-sub">
                {matched.length === 0 && !!hasFilter
                  ? 'Try broadening your filters — for example, remove the topic or change the moment.'
                  : 'Select a scenario on the left and the most relevant assets will appear here.'}
              </p>
            </div>
          ) : (
            <div>
              <div className="results-header">
                <div className="results-scenario">{selectedScenario?.title ?? 'Filtered assets'}</div>
                <div className="results-meta">
                  <span>{matched.length}</span> asset{matched.length !== 1 ? 's' : ''} · {hasFilter ? 'Filtered results' : 'Scenario match'}
                </div>
              </div>
              <div className="asset-list">
                {matched.map(id => {
                  const asset = ASSETS[id];
                  if (!asset) return null;
                  return (
                    <AssetCard
                      key={id}
                      id={id}
                      asset={asset}
                      expanded={expandedAsset === id}
                      onToggle={() => handleAssetToggle(id)}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
