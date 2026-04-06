---
description: Quy trình xử lý tác vụ dự án - AI tự nhận diện skill phù hợp
---

# 🎯 Project Agent Routing

## Thông tin Dự án
- **Tên dự án**: HAMEDCO - Nền tảng Thiết bị Y tế Doanh nghiệp (B2B)
- **Tech stack**: Next.js 14+ (App Router), TailwindCSS, Framer Motion/GSAP, Payload CMS, PostgreSQL, Cloudflare R2
- **Loại dự án**: B2B Corporate Website & Lead Generation Portal
- **Giai đoạn**: Development (Chuyển đổi giao diện tĩnh v1 sang Next.js)

## Quy tắc Tự động Chọn Agent

Khi nhận task từ user, hãy **tự động đọc và kích hoạt skill phù hợp** theo bảng dưới đây. Không cần user chỉ định tên skill.

### Thiết kế & UI
| Khi user yêu cầu | Dùng skill | Ghi chú |
|---|---|---|
| Thiết kế giao diện, layout, component, design system | `agency-ui-designer` | Luôn tuân thủ design tokens của dự án |
| Xây dựng CSS system, responsive framework | `agency-ux-architect` | Mobile-first approach |
| Nghiên cứu UX, user flow, usability | `agency-ux-researcher` | Dựa trên dữ liệu thực tế |

### Phát triển
| Khi user yêu cầu | Dùng skill | Ghi chú |
|---|---|---|
| Code frontend, component, UI logic | `agency-frontend-developer` | Theo chuẩn project tech stack |
| Thiết kế API, database schema, backend logic | `agency-backend-architect` | RESTful/GraphQL theo project convention |
| Code full-stack, tính năng phức tạp | `agency-senior-developer` | Ưu tiên clean architecture |
| Thiết kế kiến trúc tổng thể, refactor lớn | `agency-software-architect` | Document ADR (Architecture Decision Records) |
| Tạo prototype, POC, demo nhanh | `agency-rapid-prototyper` | Tốc độ ưu tiên, refine sau |
| Tối ưu database, query chậm, indexing | `agency-database-optimizer` | Luôn explain query trước khi optimize |

### Review & Debug
| Khi user yêu cầu | Dùng skill | Ghi chú |
|---|---|---|
| Review code, check quality, refactor | `agency-code-reviewer` | Focus: security, performance, maintainability |
| Debug lỗi production, incident, downtime | `agency-incident-response-commander` | Ưu tiên fix nhanh, root cause sau |
| Phân tích kết quả test, coverage | `agency-test-results-analyzer` | Đề xuất test cases thiếu |

### Audit & Security
| Khi user yêu cầu | Dùng skill | Ghi chú |
|---|---|---|
| Audit bảo mật, vulnerability scan | `agency-security-engineer` | OWASP Top 10 checklist |
| Audit accessibility, WCAG compliance | `agency-accessibility-auditor` | Minimum WCAG AA |
| Audit compliance (SOC2, GDPR, ISO) | `agency-compliance-auditor` | Theo yêu cầu cụ thể |

### Vận hành & DevOps
| Khi user yêu cầu | Dùng skill | Ghi chú |
|---|---|---|
| Setup CI/CD, deployment, automation | `agency-devops-automator` | Theo infra hiện tại |
| Bảo trì server, monitoring, uptime | `agency-infrastructure-maintainer` | Proactive monitoring |
| Git workflow, branching, merge conflicts | `agency-git-workflow-master` | Conventional commits |

### Quản lý & Kế hoạch
| Khi user yêu cầu | Dùng skill | Ghi chú |
|---|---|---|
| Lên PRD, roadmap, feature planning | `agency-product-manager` | Outcome-driven |
| Chia task, estimate, sprint planning | `agency-senior-project-manager` | Realistic scope |
| Đánh giá tool, framework, library | `agency-tool-evaluator` | So sánh ≥3 options |

### Marketing & Content
| Khi user yêu cầu | Dùng skill | Ghi chú |
|---|---|---|
| SEO, meta tags, structured data | `agency-seo-specialist` | Technical SEO first |
| Growth strategy, conversion, acquisition | `agency-growth-hacker` | Data-driven experiments |
| Viết content, blog, landing copy | `agency-content-creator` | Theo brand voice |
| Social media strategy, campaigns | `agency-social-media-strategist` | Multi-platform |

### Tối ưu & Docs
| Khi user yêu cầu | Dùng skill | Ghi chú |
|---|---|---|
| Benchmark performance, load test | `agency-performance-benchmarker` | Baseline → optimize → re-test |
| Viết docs, README, API reference | `agency-technical-writer` | Developer-friendly |
| Tối ưu workflow, process improvement | `agency-workflow-optimizer` | Measure → improve → verify |
| Điều phối nhiều agent cùng lúc | `agency-agents-orchestrator` | Cho task phức tạp |

## Quy tắc Kết hợp Agent

Khi task phức tạp cần nhiều skill, thực hiện theo thứ tự:

1. **Tính năng mới**: `product-manager` → `software-architect` → `ui-designer` → `frontend-developer` + `backend-architect` → `code-reviewer` → `technical-writer`
2. **Fix bug**: `code-reviewer` (phân tích) → `senior-developer` (fix) → `test-results-analyzer` (verify)
3. **Launch feature**: `security-engineer` → `performance-benchmarker` → `accessibility-auditor` → `devops-automator` (deploy)
4. **Redesign UI**: `ux-researcher` → `ui-designer` → `ux-architect` → `frontend-developer`
5. **Audit toàn diện**: `security-engineer` + `accessibility-auditor` + `compliance-auditor` + `performance-benchmarker`

## Lưu ý Dự án

- **Tuân thủ Hợp đồng**: Phải bám sát Scope of Work trong báo giá CRM (#BG-WEB-HAMEDCO-2026-2).
- **Frontend Architecture**: Sử dụng Next.js App Router, ưu tiên Server Components và Server Actions. Tích hợp SSR/ISR để tối ưu Core Web Vitals (>= 85 điểm).
- **UI/UX Performance**: Đạt chuẩn 60fps animations sử dụng Framer Motion hoặc GSAP.
- **Database Schema**: Hỗ trợ đầy đủ Localized field cho i18n (5 ngôn ngữ: VI, EN, JA, KO, DE).
- **Security Check**: Tất cả các Endpoint bắt Lead Form phải cấu hình chống Spam (Honeypot, Rate Limit).
