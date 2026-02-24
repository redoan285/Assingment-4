let interviewList = []
let rejectedList = []
let currentTab = "all"

const total = document.getElementById("total")
const interviewCount = document.getElementById("interviewCount")
const rejectedCount = document.getElementById("rejectedCount")
const tabCount = document.getElementById("tabCount")

const allCards = document.getElementById("allCards")
const filteredSection = document.getElementById("filteredSection")

function updateDashboard() {
    total.innerText = allCards.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}

updateDashboard()

function toggleTab(tab) {
    currentTab = tab

    document.getElementById("allBtn").className =
        tab === "all" ? "px-5 py-2 bg-blue-600 text-white rounded"
        : "px-5 py-2 bg-gray-200 rounded"

    document.getElementById("interviewBtn").className =
        tab === "interview" ? "px-5 py-2 bg-blue-600 text-white rounded"
        : "px-5 py-2 bg-gray-200 rounded"

    document.getElementById("rejectedBtn").className =
        tab === "rejected" ? "px-5 py-2 bg-blue-600 text-white rounded"
        : "px-5 py-2 bg-gray-200 rounded"

    if (tab === "all") {
        filteredSection.classList.add("hidden")
        allCards.classList.remove("hidden")
        ;[...interviewList, ...rejectedList].forEach(card => allCards.appendChild(card))
        tabCount.innerText = allCards.children.length + " jobs"
    } else if (tab === "interview") {
        renderFiltered(interviewList)
    } else {
        renderFiltered(rejectedList)
    }
}

function renderFiltered(list) {
    allCards.classList.add("hidden")
    filteredSection.classList.remove("hidden")
    filteredSection.innerHTML = ""
    tabCount.innerText = list.length + " jobs"

    if (list.length === 0) {
        filteredSection.innerHTML = `
        <div class="bg-white p-16 rounded shadow text-center">
            <p class="text-xl font-semibold text-blue-900">No jobs Available</p>
            <p class="text-gray-500">Check back soon for new job opportunities</p>
        </div>
        `
        return
    }

    list.forEach(card => filteredSection.appendChild(card))
}

document.querySelector("main").addEventListener("click", function (e) {

    const card = e.target.closest(".card")
    if (!card) return

    if (e.target.classList.contains("interview-btn")) {
        const badge = card.querySelector(".status-badge")
        badge.innerText = "INTERVIEW"
        badge.className = "status-badge bg-green-200 text-green-700 px-3 py-1 text-sm rounded"

        if (!interviewList.includes(card)) interviewList.push(card)
        rejectedList = rejectedList.filter(c => c !== card)

        updateDashboard()
        if (currentTab !== "all") toggleTab(currentTab)
    }

    if (e.target.classList.contains("rejected-btn")) {
        const badge = card.querySelector(".status-badge")
        badge.innerText = "REJECTED"
        badge.className = "status-badge bg-red-200 text-red-700 px-3 py-1 text-sm rounded"

        if (!rejectedList.includes(card)) rejectedList.push(card)
        interviewList = interviewList.filter(c => c !== card)

        updateDashboard()
        if (currentTab !== "all") toggleTab(currentTab)
    }

    /* ✅ FIXED DELETE PART */
    const deleteBtn = e.target.closest(".delete-btn")
    if (deleteBtn) {
        interviewList = interviewList.filter(c => c !== card)
        rejectedList = rejectedList.filter(c => c !== card)
        card.remove()
        updateDashboard()
        toggleTab(currentTab)
    }

})