// Shared Tailwind utility strings for the /proyectos and /features listing pages
// (header, toolbar, grid/list cards, modal shell) — both pages use the same visual system.

export const pkHeader =
  "relative overflow-hidden px-12 pt-35 pb-15 max-[900px]:px-6 max-[560px]:px-5 max-[560px]:pt-25 max-[560px]:pb-11";
export const pkHeaderGridBg =
  "absolute inset-0 [background-image:linear-gradient(var(--mt-grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--mt-grid-line)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,black_20%,transparent_100%)]";
export const pkHeaderGlow =
  "pointer-events-none absolute -top-25 left-1/2 h-100 w-150 -translate-x-1/2 bg-[radial-gradient(circle,rgba(242,100,25,0.12)_0%,transparent_70%)]";
export const pkHeaderInner = "relative mx-auto max-w-[1320px]";
export const pkBreadcrumb = "mb-5 flex items-center gap-2 text-xs text-mt-text-30";
export const pkBreadcrumbLink = "text-mt-text-30 no-underline transition-colors duration-200 hover:text-mt-orange";
export const pkTitle = "mb-4.5 font-mt-display text-[clamp(38px,6vw,72px)] leading-none font-extrabold tracking-[-0.04em]";
export const pkSubtitle = "mb-8 max-w-[480px] text-[15px] leading-[1.7] text-mt-text-60";
export const pkStats = "flex flex-wrap gap-9";
export const pkStatN = "font-mt-display text-2xl font-bold tracking-[-0.03em]";
export const pkStatL = "font-mt-mono text-[10px] tracking-[0.08em] text-mt-text-30 uppercase";

export const pkToolbar = "sticky top-16.25 z-60 border-b border-mt-border bg-mt-bg transition-colors duration-300 max-[560px]:top-14.5";
export const pkToolbarInner = "mx-auto flex max-w-[1320px] flex-wrap items-center gap-3 px-12 py-3.5 max-[900px]:px-6 max-[560px]:px-5";
export const pkFilterLabel = "mr-1 font-mt-mono text-[10px] tracking-[0.08em] whitespace-nowrap text-mt-text-30 uppercase max-[560px]:hidden";
export const pkFilterPill =
  "cursor-pointer rounded-full border border-mt-border bg-mt-text-10 px-3.5 py-1.5 font-mt-body text-[12.5px] font-[450] whitespace-nowrap text-mt-text-60 transition-all duration-200 hover:border-mt-border-bright hover:text-mt-text";
export const pkFilterPillActive = "border-mt-orange! bg-mt-orange! text-black! font-medium!";
export const pkSep = "mx-1 h-7 w-px shrink-0 bg-mt-border";
export const pkSortSelect =
  "cursor-pointer rounded-lg border border-mt-border bg-mt-text-10 px-3 py-1.5 font-mt-body text-xs text-mt-text-60 outline-none transition-all duration-200 hover:border-mt-border-bright hover:text-mt-text focus-visible:border-mt-orange focus-visible:ring-2 focus-visible:ring-mt-orange-dim max-[560px]:min-w-35 max-[560px]:flex-1";
export const pkResultsCount = "ml-2 text-xs whitespace-nowrap text-mt-text-30 max-[560px]:ml-0 max-[560px]:order-3 max-[560px]:w-full";
export const pkViewToggle = "ml-auto flex gap-1 max-[560px]:ml-0";
export const pkViewBtn =
  "flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-mt-border bg-mt-text-10 text-mt-text-30 transition-all duration-200 hover:text-mt-text-60";
export const pkViewBtnActive = "border-[rgba(242,100,25,.3)]! bg-mt-orange-dim! text-mt-orange!";

export const pkMain = "mx-auto max-w-[1320px] px-12 pt-10 pb-25 max-[900px]:px-6 max-[560px]:px-5";
export const pkGrid = "grid grid-cols-3 gap-5 max-[900px]:grid-cols-1";
export const pkList = "flex flex-col gap-2.5";
export const pkNoResults = "py-20 text-center text-mt-text-30";

// ─── grid card ───
export const pkCard =
  "group flex cursor-pointer flex-col overflow-hidden rounded-[18px] border border-mt-border bg-mt-card-bg text-left transition-all duration-300 hover:-translate-y-1 hover:border-mt-border-bright hover:shadow-mt-card";
export const pkCardFeatured = "col-span-2 max-[900px]:col-span-1";
export const pkCardPreview = "relative h-47.5 shrink-0 overflow-hidden bg-mt-surface-2";
export const pkCardPreviewFeatured = "h-62.5!";
export const pkPreviewGradient = "absolute inset-x-0 bottom-0 z-2 h-20 bg-linear-to-b from-transparent to-mt-card-bg";
export const pkBrowserMock =
  "absolute inset-x-4 top-4 bottom-0 flex flex-col overflow-hidden rounded-t-[10px] border border-mt-border bg-mt-surface shadow-[0_8px_40px_rgba(0,0,0,.5)] transition-transform duration-400 group-hover:-translate-y-1.5";
export const pkBrowserBar = "flex h-6.5 shrink-0 items-center gap-3 border-b border-mt-border bg-mt-surface-2 px-2.5";
export const pkBrowserShot = "relative min-h-0 flex-1 overflow-hidden";
export const pkBrowserUrl = "mx-2 h-3.5 flex-1 rounded-[3px] bg-mt-border";
export const pkBrowserBody = "flex flex-col gap-1.25 p-2.5";
export const pkBrow = "h-1.75 rounded-[3px] bg-mt-border-bright";
export const pkBrowGrid = "mt-1 grid grid-cols-2 gap-1.25";
export const pkBrowBlock = "h-8 rounded-md bg-mt-border";
export const pkBrowBlockAccent = "border border-[rgba(242,100,25,.2)] bg-[rgba(242,100,25,.15)]";
export const pkCatBadge =
  "absolute top-3 left-3 z-3 rounded-full border border-mt-border-bright bg-mt-bg/80 px-2.5 py-1 text-[10px] tracking-[0.06em] text-mt-text-60 uppercase backdrop-blur-[10px]";
export const pkStatusBadge =
  "absolute top-3 right-3 z-3 flex items-center gap-1.25 rounded-full border border-mt-border-bright bg-mt-bg/80 px-2.5 py-1 text-[10px] text-mt-text-60 backdrop-blur-[10px]";
export const pkStatusDot = "h-1.5 w-1.5 rounded-full";

export const pkCardBody = "flex flex-1 flex-col p-5.5";
export const pkCardMeta = "mb-2.5 flex items-center justify-between";
export const pkCardType = "font-mt-mono text-[10px] tracking-[0.08em] text-mt-orange uppercase";
export const pkCardYear = "text-[11px] text-mt-text-30";
export const pkCardTitle = "mb-2 font-mt-display text-lg leading-[1.2] font-bold tracking-[-0.02em]";
export const pkCardDesc = "mb-4 flex-1 text-xs leading-[1.65] text-mt-text-60";
export const pkCardMetrics = "mb-3.5 flex flex-wrap gap-3.5 rounded-lg bg-mt-text-10 p-3";
export const pkCardMetricVal = "font-mt-display text-[15px] font-bold tracking-[-0.02em] text-mt-orange";
export const pkCardMetricLbl = "font-mt-mono text-[9px] tracking-[0.06em] text-mt-text-30 uppercase";
export const pkCardStack = "mb-3.5 flex flex-wrap gap-1.25";
export const pkStag = "rounded-[5px] border border-mt-border bg-mt-tag-bg px-2.25 py-[3px] font-mt-mono text-[10px] text-mt-text-60";
export const pkCardFooter = "mt-auto flex items-center justify-between border-t border-mt-border pt-3.5";
export const pkCardCta = "flex items-center gap-1.25 text-xs text-mt-orange transition-[gap] duration-200 group-hover:gap-2.25";
export const pkCardLinks = "flex gap-2";
export const pkCardLink =
  "flex h-7 w-7 items-center justify-center rounded-md border border-mt-border bg-mt-text-10 text-xs text-mt-text-60 no-underline transition-all duration-200 hover:border-[rgba(242,100,25,.3)] hover:bg-mt-orange-dim hover:text-mt-orange";

// ─── list card ───
export const pkLcard =
  "grid w-full cursor-pointer grid-cols-[56px_1fr_auto] items-center gap-5 rounded-[14px] border border-mt-border bg-mt-card-bg px-6 py-5 text-left transition-all duration-250 hover:border-mt-border-bright hover:bg-mt-surface max-[900px]:grid-cols-1 max-[900px]:gap-3";
export const pkLcardIcon =
  "flex h-14 w-14 items-center justify-center rounded-[14px] border border-[rgba(242,100,25,.2)] bg-mt-orange-dim font-mt-mono text-sm font-medium tracking-[0.02em] text-mt-orange max-[900px]:hidden";
export const pkLcardLogo =
  "flex h-14 w-14 items-center justify-center overflow-hidden rounded-[14px] border border-[rgba(242,100,25,.2)] bg-white p-2.5 max-[900px]:hidden";
export const pkLcardTitle = "font-mt-display text-base font-bold tracking-[-0.015em]";
export const pkLcardCat =
  "rounded-full border border-[rgba(242,100,25,.2)] bg-mt-orange-dim px-2 py-0.5 text-[10px] tracking-[0.08em] text-mt-orange uppercase";
export const pkLcardDesc = "my-1 text-xs leading-[1.5] text-mt-text-60";
export const pkLcardStack = "flex flex-wrap gap-1";
export const pkLcardStag = "rounded border border-mt-border bg-mt-tag-bg px-2 py-0.5 font-mt-mono text-[10px] text-mt-text-60";
export const pkLcardRight = "flex shrink-0 flex-col items-end gap-2 max-[900px]:hidden";
export const pkLcardMetricVal = "font-mt-display text-lg font-bold tracking-[-0.02em] text-mt-orange";
export const pkLcardMetricLbl = "text-[10px] text-mt-text-30";

// ─── modal ───
export const pkModalOverlay =
  "fixed inset-0 z-500 flex items-center justify-center bg-mt-modal-bg p-6 backdrop-blur-[12px] max-[560px]:p-3";
export const pkModal =
  "flex max-h-[90vh] w-full max-w-[900px] flex-col overflow-hidden rounded-3xl border border-mt-border-bright bg-mt-bg shadow-[0_40px_120px_rgba(0,0,0,.8)] transition-[max-width] duration-200 max-[900px]:max-h-[95vh]";
export const pkModalWide = "max-w-[1240px]! max-h-[94vh]!";
export const pkModalHeader = "flex shrink-0 items-start justify-between px-7 pt-6 max-[560px]:px-4.5";
export const pkModalCategory = "mb-1.5 font-mt-mono text-[10px] tracking-[0.08em] text-mt-orange uppercase";
export const pkModalTitle = "font-mt-display text-[26px] leading-[1.1] font-extrabold tracking-[-0.03em] max-[560px]:text-[21px]";
export const pkModalClose =
  "ml-4 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-[9px] border border-mt-border bg-mt-text-10 text-base text-mt-text-60 transition-all duration-200 hover:border-[rgba(255,80,80,.3)] hover:bg-[rgba(255,80,80,.1)] hover:text-[#ff5050]";
export const pkModalTabs = "flex shrink-0 gap-0 border-b border-mt-border px-7 pt-5 max-[560px]:px-4.5";
export const pkModalTab =
  "-mb-px cursor-pointer border-0 border-b-2 border-b-transparent bg-transparent px-4.5 py-2.5 font-mt-body text-[13px] text-mt-text-60 transition-all duration-200";
export const pkModalTabActive = "border-b-mt-orange! text-mt-orange!";
export const pkModalBody =
  "flex-1 overflow-y-auto p-7 max-[560px]:px-4.5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-mt-border-bright [&::-webkit-scrollbar-track]:bg-transparent";
export const pkModalDescFull = "mb-1 text-[13px] leading-[1.75] text-mt-text-60";
export const pkModalStatRow = "mb-5 flex flex-wrap gap-3";
export const pkModalStat = "min-w-30 flex-1 rounded-xl border border-mt-border bg-mt-surface px-5 py-4";
export const pkModalStatVal = "mb-0.5 font-mt-display text-[22px] font-bold tracking-[-0.025em] text-mt-orange";
export const pkModalStatLbl = "font-mt-mono text-[10px] tracking-[0.06em] text-mt-text-30 uppercase";
export const pkModalKpTitle = "mb-3.5 font-mt-display text-base font-bold tracking-[-0.015em]";
export const pkModalKpList = "mb-6 flex list-none flex-col gap-2.25 [&_strong]:text-mt-text";
export const pkModalKpItem =
  "flex items-start gap-2.5 text-[13px] leading-normal text-mt-text-60 before:mt-0.5 before:shrink-0 before:text-xs before:text-mt-orange before:content-['✓']";
export const pkModalChallenge = "mb-5 rounded-xl border border-mt-border bg-mt-surface p-4.5";
export const pkModalChallengeLabel = "mb-2 text-[10px] tracking-widest text-mt-orange uppercase";
export const pkModalChallengeText = "text-[13px] leading-[1.65] text-mt-text-60";

export const pkStackSection = "mb-6";
export const pkStackSectionTitle = "mb-3 font-mt-display text-sm font-semibold tracking-[-0.01em] text-mt-text-60";
export const pkStackPills = "flex flex-wrap gap-2";
export const pkStackPill = "rounded-lg border border-mt-border bg-mt-surface px-3.5 py-1.75 font-mt-mono text-xs text-mt-text";
export const pkStackPillCore = "border-[rgba(242,100,25,.25)]! bg-mt-orange-dim! text-mt-orange!";

export const pkGalleryGrid = "grid grid-cols-2 gap-3.5 max-[900px]:grid-cols-1";
export const pkGalleryItem = "relative aspect-[16/10] overflow-hidden rounded-xl border border-mt-border bg-mt-surface-2";
export const pkGalleryItemWide = "col-span-2 max-[900px]:col-span-1";
export const pkGscreen = "flex h-full w-full flex-col";
export const pkGscreenBar = "flex h-5.5 shrink-0 items-center gap-1 border-b border-mt-border bg-mt-surface-3 px-2";
export const pkGscreenDot = "h-1.5 w-1.5 rounded-full";
export const pkGscreenBody = "flex flex-1 flex-col gap-1.25 overflow-hidden p-2";
export const pkGscreenRow = "h-1.5 rounded-[3px] bg-mt-border-bright";
export const pkGscreenBlocks = "mt-1 grid grid-cols-3 gap-1";
export const pkGscreenBlock = "h-7 rounded-md bg-mt-border";
export const pkGscreenBlockAccent = "border border-[rgba(242,100,25,.2)] bg-[rgba(242,100,25,.15)]";
export const pkGscreenChart = "relative mt-1 h-12.5 overflow-hidden rounded-md bg-mt-surface-3";
export const pkGscreenChartBar = "absolute bottom-0 w-[8%] rounded-t-[2px] bg-mt-orange opacity-70";
export const pkGalleryLabel =
  "absolute inset-x-2.5 bottom-2.5 z-2 rounded-[7px] border border-mt-border bg-mt-bg/80 px-2.5 py-1.5 text-[11px] text-mt-text-60 backdrop-blur-[8px]";

export const pkModalFooter =
  "flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-mt-border bg-mt-surface px-7 py-4.5 max-[560px]:px-4.5 max-[560px]:py-3.5";
export const pkModalFooterLinks = "flex flex-wrap gap-2.5";
export const pkModalNavBtns = "flex gap-2";
export const pkModalNavBtn =
  "flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-mt-border bg-mt-text-10 text-sm text-mt-text-60 transition-all duration-200 enabled:hover:border-[rgba(242,100,25,.3)] enabled:hover:bg-mt-orange-dim enabled:hover:text-mt-orange disabled:cursor-default disabled:opacity-30";

export const pkShotGallery = "grid grid-cols-2 gap-3.5 max-[900px]:grid-cols-1";
export const pkShotGalleryItem = "relative overflow-hidden rounded-xl border border-mt-border bg-mt-surface-2 h-115 max-[900px]:h-105";
export const pkShotGalleryItemWide = "col-span-2 h-170! max-[900px]:col-span-1 max-[900px]:h-115!";
