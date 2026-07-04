document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Dynamic Matrix Radial Positioning ---
    const radarGlow = document.getElementById("radar-glow");
    if (radarGlow) {
        window.addEventListener("mousemove", (e) => {
            radarGlow.style.left = `${e.clientX}px`;
            radarGlow.style.top = `${e.clientY}px`;
        });
    }

    // --- 2. Live Automated Telemetry Monitor Stream ---
    const telemetryContainer = document.getElementById("telemetry-stream");
    const runtimeLogMatrices = [
        "CRON // Active token validated across standard encryption layers.",
        "DB_MESH // Firebase listener pool polling latency clocked at 42ms.",
        "SCRIPT // App Script triggered array execution targeting data models.",
        "PIPELINE // AI node stream payload optimization mapping updated.",
        "SYS_MONITOR // Memory buffer garbage allocation sweep complete.",
        "METRIC // Strict layout schema verification passed semantic standard."
    ];

    function stepTelemetryStream() {
        if (!telemetryContainer) return;
        
        const timestamp = new Date().toISOString().slice(11, 19);
        const coreString = runtimeLogMatrices[Math.floor(Math.random() * runtimeLogMatrices.length)];
        
        const runtimeLine = document.createElement("div");
        runtimeLine.className = "tel-line";
        
        if (coreString.includes("validated") || coreString.includes("complete")) {
            runtimeLine.innerHTML = `[${timestamp}] <span class="tel-ok">SUCCESS</span> // ${coreString.split("//")[1]}`;
        } else if (coreString.includes("Firebase") || coreString.includes("AI node")) {
            runtimeLine.innerHTML = `[${timestamp}] <span class="tel-exec">PROCESS</span> // ${coreString.split("//")[1]}`;
        } else {
            runtimeLine.innerHTML = `[${timestamp}] <span class="tel-sys">SYSTEM</span> // ${coreString.split("//")[1]}`;
        }

        telemetryContainer.appendChild(runtimeLine);

        // Retain standard bounding constraints
        if (telemetryContainer.childNodes.length > 9) {
            telemetryContainer.removeChild(telemetryContainer.firstChild);
        }
    }
    if (telemetryContainer) setInterval(stepTelemetryStream, 2000);

    // --- 3. Interactive Code Inspector Controller Logic ---
    const projectTriggers = document.querySelectorAll(".inspect-target-card");
    const codeViewBlock = document.getElementById("inspector-code-block");
    const windowTabTitle = document.getElementById("inspector-tab-title");

    const projectManifestSchemas = {
        bwb: {
            filename: "bwb_infrastructure_manifest.json",
            content: `{\n  "system_id": "BWB_CORE_ENGINE",\n  "architecture": "Relational Multi-Trigger Grid",\n  "components": ["Google App Script", "Secure Webhooks", "Data Routing Hub"],\n  "operation_rate": "Continuous, real-time payload processing",\n  "security_parameters": "MD5 Hash Validation Handshake",\n  "status": "PROD_OPERATIONAL"\n}`
        },
        planner: {
            filename: "smart_planner_schema.json",
            content: `{\n  "module_id": "PLANNER_SYNC_NODE",\n  "database_sync": "Firebase Cloud Firestore Hub",\n  "offline_persistence": "Service Worker Cache Framework",\n  "state_machine": "Asynchronous Real-time Mutation Buffers",\n  "rendering_target": "PWA Standard Node Engine",\n  "status": "ACTIVE_DEPLOYED"\n}`
        },
        portfolio: {
            filename: "portfolio_interface_spec.json",
            content: `{\n  "viewport_id": "PORTFOLIO_PROD_UI",\n  "styling_paradigm": "Pure Glassmorphism Native Semantic Layer",\n  "dom_controller": "Vanilla JS Async Mutator Framework",\n  "dependency_matrix": "Zero External Framework Abstractions",\n  "seo_optimization": "Strict Metadata Semantic Schema Matrix",\n  "status": "STABLE_LIVE"\n}`
        }
    };

    projectTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            projectTriggers.forEach(t => t.classList.remove("active"));
            trigger.classList.add("active");

            const selectedSchemaKey = trigger.getAttribute("data-project");
            const activeSchema = projectManifestSchemas[selectedSchemaKey];

            if (activeSchema && codeViewBlock && windowTabTitle) {
                windowTabTitle.textContent = activeSchema.filename;
                codeViewBlock.textContent = activeSchema.content;
            }
        });
    });

    // --- 4. Encrypted Form Submission Stream Data ---
    const handshakeForm = document.getElementById("handshake-router-form");
    const statusLogger = document.getElementById("router-log-status");

    if (handshakeForm && statusLogger) {
        handshakeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            statusLogger.textContent = "⚙ ROUTING: Executing_Handshake_Sequence()...";
            statusLogger.style.color = "var(--neon-cyan)";

            setTimeout(() => {
                statusLogger.innerHTML = "<span style='color:#22c55e;'>✓ TERMINAL_SUCCESS: Encrypted transmission accepted by remote node.</span>";
                handshakeForm.reset();
            }, 1200);
        });
    }
});