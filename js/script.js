/* ============================
           Lógica JavaScript Dinâmica
           ============================ */
        
        const guestsData = [
            { name: "Genyffer Queiroz", role: "Fundadora Gerir Conexões", img: "../img/foto-convidado7.webp" },
            { name: "Claudiane Delis", role: "Especialista em Legalização", img: "../img/foto-convidado6.webp" },
            { name: "Rodrigo Gonzaga", role: "Consultor Empresarial", img: "../img/foto-convidado5.webp" },
            { name: "Yuri Rocha", role: "Contador", img: "../img/foto-convidado4.webp" },
            { name: "Elvis Barbosa", role: "CEO Pontuar Contabilidade", img: "../img/foto-convidado2.webp" },
            { name: "Simoni Luduvice", role: "Criadora do método Coachibilidade", img: "../img/foto-convidado3.webp" },
            { name: "Weslly Barbosa", role: "Empresário Contábil", img: "../img/foto-convidado1.webp" },
            { name: "João Silva", role: "Empresário Contábil", img: "../img/foto-convidado8.webp" }
        ];

        const container = document.getElementById('guests-container');
        const loadMoreBtn = document.getElementById('load-more-btn');
        const loadMoreText = document.getElementById('load-more-text');
        
        const initialItems = 6; // Quantidade inicial fixa
        let itemsToShow = initialItems; 
        let isExpanded = false; // Controle de estado (expandido ou não)

        function renderGuests() {
            container.innerHTML = ''; 
            
            // Renderiza os cards
            for (let i = 0; i < itemsToShow && i < guestsData.length; i++) {
                const guest = guestsData[i];
                
                const col = document.createElement('div');
                col.className = 'col-12 col-md-6 col-lg-4 d-flex justify-content-center';
                
                col.innerHTML = `
                    <div class="guest-card w-100">
                        <img src="${guest.img}" alt="${guest.name}" class="guest-img shadow">
                        <h3 class="guest-name">${guest.name}</h3>
                        <p class="guest-role">${guest.role}</p>
                        <a href="https://www.youtube.com/@CarlosSantosContador" target="_blank" class="btn-watch">Assista agora</a>
                    </div>
                `;
                container.appendChild(col);
            }

            // Lógica para esconder o botão se o total de itens for menor que o inicial
            if (guestsData.length <= initialItems) {
                loadMoreBtn.style.display = 'none';
            } else {
                // Atualiza o texto do botão dependendo do estado
                loadMoreBtn.style.display = 'flex'; // Garante que fique visível
                
                if (itemsToShow >= guestsData.length) {
                    loadMoreText.textContent = 'Ver menos -';
                    isExpanded = true;
                } else {
                    loadMoreText.textContent = 'Carregar mais -';
                    isExpanded = false;
                }
            }
        }

        // Renderização inicial
        renderGuests();

        // Evento de clique
        loadMoreBtn.addEventListener('click', () => {
            if (isExpanded) {
                // Se estiver expandido, volta para a quantidade inicial
                itemsToShow = initialItems;
                
                // Opção extra: Faz a tela rolar suavemente de volta para o topo da seção
                document.querySelector('.section-title').scrollIntoView({ behavior: 'smooth' });
            } else {
                // Se não estiver, carrega mais 3 (ou o restante)
                itemsToShow += 3; 
            }
            renderGuests();   
        });

/* ============================
           Lógica JavaScript Dinâmica
           ============================ */
        
        // Mock de dados simulando uma API de episódios
        // Utilizei placeholders para as imagens que lembram thumbnails
        const episodesData = [
            {
                title: "Decidiu empreender na contabilidade.",
                desc: "Empresária Contábil Ingrid Barral é Sócia da Barral Contabilidade",
                img: "../img/imagem1-video.jpg"
            },
            {
                title: "De colaborador do segmento de combustível para empresário de sucesso.",
                desc: "Empresário Contábil Hugo Vieira é Sócio da Conteasy Contabilidade",
                img: "../img/imagem2-video.jpg"
            },
            {
                title: "Deixou de ser gerente de um cervejaria para dominar o mercado de praia",
                desc: "Empresário Glauco Naciulini é fundador da Beach Club Boa Viagem",
                img: "../img/imagem3-video.jpg"
            },
            {
                title: "Dexidiu acreditar",
                desc: "Empresário Contábil Flávio Fernandes é Sócio da MGC Contabilidade.",
                img: "../img/imagem4-video.jpg"
            },
            {
                title: "Contabilidade e educação como estratégia de crescimento.",
                desc: "Empresário e Educador,  Romildo Pontes é Sócio da Romildo Pontes Consultoria e Treinamentos.",
                img: "../img/imagem5-video.jpg"
            }
        ];

        const slider = document.getElementById('episodes-slider');
        const prevArrow = document.getElementById('prev-arrow');
        const nextArrow = document.getElementById('next-arrow');

        // Função para renderizar os cards
        function renderEpisodes() {
            episodesData.forEach(episode => {
                const cardWrapper = document.createElement('div');
                cardWrapper.className = 'episode-card';
                
                cardWrapper.innerHTML = `
                    <div class="episode-img-wrapper">
                        <img src="${episode.img}" alt="${episode.title}" class="episode-img">
                    </div>
                    <h3 class="episode-title">${episode.title}</h3>
                    <p class="episode-desc">${episode.desc}</p>
                    <div>
                        <a href="#" class="btn-watch">Assista agora</a>
                    </div>
                `;
                slider.appendChild(cardWrapper);
            });
        }

        // Renderiza os dados ao carregar
        renderEpisodes();

        // Lógica de rolagem ao clicar nas setas
        const getScrollAmount = () => {
            // Pega a largura de um card + o gap definido no CSS para saber quanto rolar
            const card = slider.querySelector('.episode-card');
            const gap = parseFloat(getComputedStyle(slider).gap) || 24; // Pega o gap real ou usa 24px (1.5rem) como fallback
            return card.offsetWidth + gap;
        };

        nextArrow.addEventListener('click', () => {
            slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        prevArrow.addEventListener('click', () => {
            slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });