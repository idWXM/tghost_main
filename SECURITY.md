# TGhosT™ Security Policy

This document describes how to report security vulnerabilities responsibly for
the TGhosT™ project and related infrastructure operated by RunAI Systems LLC.

---

## Supported Versions

We provide security updates for the following versions / branches:

| Version / Branch           | Supported |
|----------------------------|-----------|
| `WXM-9271-ALPHA-16`       | ✅ Active |
| `main`                    | ✅ Active |
| Experimental branches     | ⚠️ Best-effort only |

Older or archived branches are considered **out of support** and may not receive patches.

---

## Reporting a Vulnerability

If you believe you have found a security issue affecting TGhosT™ or any related
service, please contact us **privately** using one of the channels below:

- 📧 **Primary:** `security@runaisystems.com`  
- 📧 **Legal / formal:** `sign@runaisystems.com`  
- 📝 Subject: `TGhosT SECURITY – <short summary>`

Please include, when possible:

1. A clear description of the issue  
2. Step-by-step instructions to reproduce  
3. The potential impact (data exposure, privilege escalation, etc.)  
4. Any logs, screenshots, or proof-of-concept code  
5. Your preferred contact method (email, Signal, etc.)

⚠️ **Do not** open a public GitHub issue or pull request containing
sensitive details. Always report privately first.

---

## Scope

This policy applies to:

- `tghost.ai` and its subdomains  
- TGhosT-related repositories under `RunAI-Systems-LLC` and `idWXM` on GitHub  
- Backend services and APIs directly used by TGhosT™ in production

Out of scope (for this policy):

- Personal test environments  
- Third-party services not controlled by RunAI Systems LLC  

---

## Our Commitment

When you report a vulnerability in good faith, we commit to:

1. Acknowledge your report **within 5 business days**  
2. Triage and assess severity as quickly as reasonably possible  
3. Work on a fix or mitigation plan  
4. Coordinate disclosure timing with you, when applicable  

We will not pursue legal action against researchers who:

- Act in **good faith**  
- Respect privacy and data protection  
- Do not intentionally cause service disruption or data loss  
- Follow this policy and relevant laws

---

## Safe Testing Guidelines

When testing TGhosT™ and related services:

- Do **not** access, modify, or delete data that does not belong to you  
- Do **not** attempt Denial-of-Service (DoS) or large-scale automated attacks  
- Do **not** use social engineering against employees, partners, or users  

If you are unsure whether an activity is allowed, contact us first:
`security@runaisystems.com`.

---

TGhosT™ – WXM-9271-ALPHA-16  
A project by **RunAI Systems LLC – Palo Alto, California**
