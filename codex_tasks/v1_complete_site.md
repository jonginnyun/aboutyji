Windows environment note:
This repository is being edited on Windows PowerShell. Node and npm are installed at:
- C:\Program Files\nodejs\node.exe
- C:\Program Files\nodejs\npm.cmd

When running Node/npm commands, prefer the explicit Windows paths:
- & "C:\Program Files\nodejs\npm.cmd" install
- & "C:\Program Files\nodejs\npm.cmd" run build
- & "C:\Program Files\nodejs\npm.cmd" run dev

Do not assume that `node` or `npm` are available through PATH inside the Codex sandbox.



You are working on my personal academic website repository.



This run should create a usable Version 1 of the website. Do not merely write a plan. Implement, fix, verify, and document.



Read first:



\* AGENTS.md

\* PROJECT\_BRIEF.md

\* README.md if it exists

\* package.json if it exists

\* astro.config.\* if it exists

\* src/content/config.\* if it exists

\* legacy HTML/CSS/assets



Current priority:

The existing visual design is the source of truth. A previous generated redesign looked bad. Preserve or faithfully reimplement the original/legacy design. Do not replace it with a generic portfolio template.



Primary goals:



1\. Make the site build successfully.

2\. Make it previewable with `npm run dev`.

3\. Preserve legacy HTML/CSS/assets.

4\. Preserve the original design as much as possible.

5\. Create a maintainable MDX-based writing system.

6\. Support math-heavy notes.

7\. Organize mathematics and physics notes into a coherent hierarchy.

8\. Implement safe draft behavior.

9\. Implement a safe local writing workflow.

10\. Document everything.



Immediate bug fix:



\* Search all `.mdx` files for invalid HTML comments like `<!-- TODO ... -->`.

\* Convert them to valid MDX/JSX comments like `{/\* TODO ... \*/}`.

\* Fix any MDX parse errors.

\* Run the build after fixing.



Do not:



\* Do not delete legacy HTML/CSS/assets.

\* Do not push to GitHub.

\* Do not commit secrets.

\* Do not put credentials in frontend code.

\* Do not call the OpenAI API.

\* Do not auto-post to Naver.

\* Do not add browser automation for Naver.

\* Do not invent publications, awards, affiliations, citations, or legal/NIW claims.

\* Do not publish private draft notes as public polished posts.

\* Do not dump raw LaTeX source directly into pages.



Site pages:

Create or fix these pages:



\* Home

\* Research

\* Publications

\* Projects

\* Notes

\* Essays

\* CV

\* Contact



Owner identity:



\* Jonginn Yun

\* Stanford Applied Physics PhD student

\* Experimental physicist

\* Research background includes semiconductor quantum devices, spin qubits, quantum control, cryogenic measurement, RF reflectometry, nanofabrication, superconducting circuits, multimode cQED, and physics notes.

&#x20; Use conservative academic language.



Content system:

Use Astro content collections or the existing content system if already created.



Collections should support:



\* notes

\* essays

\* projects

\* publications



Useful front matter fields:



\* title

\* date

\* updated

\* lang

\* slug

\* category

\* section

\* subsection

\* tags

\* summary

\* math

\* draft

\* source\_note

\* translation\_of

\* canonical\_lang

\* naver\_export



Draft behavior:



\* Draft notes should not appear in public listings by default in production.

\* In development, drafts may be visible with a clear draft badge.

\* README must explain how drafts work.



Design:



\* Inspect the original legacy HTML and CSS.

\* Reuse the old typography, spacing, navigation, colors, layout, and assets where reasonable.

\* Remove or replace any ugly generic generated design.

\* The result should look like the original site but be easier to maintain.



Mathematics note hierarchy:

Create or refine a Mathematics notes section with:



1\. Foundations



&#x20;  \* sets, functions, relations

&#x20;  \* logic/proof style if present

2\. Topology



&#x20;  \* topological spaces

&#x20;  \* continuity

&#x20;  \* compactness

&#x20;  \* connectedness

&#x20;  \* quotient spaces

&#x20;  \* manifolds if relevant

3\. Analysis



&#x20;  \* metric spaces

&#x20;  \* sequences and convergence

&#x20;  \* differential/integral concepts

&#x20;  \* functional analysis if present

4\. Algebra



&#x20;  \* groups

&#x20;  \* rings

&#x20;  \* fields

&#x20;  \* modules/vector spaces

&#x20;  \* representations if present

5\. Algebraic Topology



&#x20;  \* homotopy

&#x20;  \* fundamental group

&#x20;  \* covering spaces

&#x20;  \* homology/cohomology if present

6\. Differential Geometry



&#x20;  \* manifolds

&#x20;  \* tangent/cotangent spaces

&#x20;  \* vector fields

&#x20;  \* differential forms

&#x20;  \* Lie derivative

&#x20;  \* connections

&#x20;  \* curvature

7\. Fiber Bundles



&#x20;  \* fiber bundles

&#x20;  \* vector bundles

&#x20;  \* principal bundles

&#x20;  \* connections on bundles

&#x20;  \* curvature

&#x20;  \* characteristic classes if present

&#x20;  \* physical intuition links where appropriate



Use `.tex` files in `source\_notes/lecture\_notes/` as source material. Reorganize them into readable draft MDX notes. Do not dump raw LaTeX. Preserve equations. Mark generated notes as `draft: true`.



Physics note hierarchy:

Create or refine a Physics notes section with:



1\. Classical Mechanics



&#x20;  \* Goldstein-style analytical mechanics organization

&#x20;  \* variational principles

&#x20;  \* Lagrangian mechanics

&#x20;  \* Hamiltonian mechanics

&#x20;  \* canonical transformations

&#x20;  \* Poisson brackets

&#x20;  \* small oscillations

&#x20;  \* rigid body motion

&#x20;  \* Hamilton-Jacobi theory

&#x20;  \* action-angle variables

&#x20;  \* chaos/KAM if present



2\. Quantum Mechanics



&#x20;  \* create section/index structure for Version 1



3\. Statistical Mechanics



&#x20;  \* add real draft content on Boltzmann entropy and Gibbs entropy

&#x20;  \* include microstate, macrostate, probability distribution, coarse graining, Liouville theorem, fine-grained Gibbs entropy, coarse-grained Gibbs entropy, and statistical assumptions

&#x20;  \* avoid vague statements like “nature wants to minimize energy”



4\. Electrodynamics



&#x20;  \* create section/index structure for Version 1



5\. Quantum Field Theory



&#x20;  \* create section/index structure for Version 1



6\. Condensed Matter Physics



&#x20;  \* use source notes if present

&#x20;  \* organize basic content into readable sections

&#x20;  \* include crystal structure, reciprocal space, band theory, effective mass/envelope function ideas, Fermi surface, phonons, semiclassical dynamics, and semiconductor/2DEG/quantum-device basics if present



For generated notes:



\* Use precise graduate-level exposition.

\* Preserve equations.

\* Use clear headings.

\* Add TODO comments where the source note is incomplete or ambiguous.

\* Reconcile with existing website content.

\* Avoid duplicate contradictory pages.

\* Keep draft status true.



Writing workflow:

Add local scripts if reasonable:



\* `npm run new:note`

\* `npm run new:essay`



These should create MDX files with valid front matter. They must not require credentials or external APIs.



Security:



\* Add or verify `.gitignore` includes `.env`, `.env.local`, logs, temporary files, and private/generated junk.

\* Add `.env.example` only if useful.

\* Add SECURITY\_NOTES.md explaining that credentials must stay in local env files or deployment secrets, never in frontend code.

\* If a future Git-backed CMS is discussed, document it as Phase 2 unless it can be implemented securely without secrets.



Future features:

Document but do not fully implement unless trivial:



\* OpenAI translation script using environment variables.

\* Naver draft export to `.html` and `.txt`.

\* Optional Git-backed CMS via GitHub OAuth.



Documentation:

Update README.md with:



\* project purpose

\* install command

\* dev command

\* build command

\* preview command

\* content directory structure

\* how to add a note

\* how to add an essay

\* how drafts work

\* how math/MDX works

\* how the design was preserved

\* security rules

\* future translation/Naver/CMS plan



Create or update:



\* CODEX\_V1\_SUMMARY.md

\* TODO\_NOTES\_RECONCILIATION.md

\* SECURITY\_NOTES.md if helpful



Verification:

Run:



\* npm install

\* npm run build

\* npm run check if available

\* npm run lint if available



If build fails:



\* Fix reasonable issues.

\* Rerun.

\* Do not loop indefinitely.

\* Document unresolved failures.



Final report:

Create CODEX\_V1\_SUMMARY.md with:



1\. What changed

2\. Files changed

3\. Design preservation decisions

4\. Content architecture

5\. Notes generated

6\. Draft/public behavior

7\. Security model

8\. Commands run

9\. Build result

10\. How to preview locally

11\. What remains for Version 2



Stop after Version 1 is complete.



