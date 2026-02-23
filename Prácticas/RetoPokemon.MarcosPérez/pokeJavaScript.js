const select = document.getElementById('pokeSelect');
const input = document.getElementById('pokeInput');
const btn = document.getElementById('btnBuscar');
const display = document.getElementById('resultado');

async function cargarNombres() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');
    const data = await res.json();
    
    select.innerHTML = '<option value="">-- Elige un Pokémon --</option>';
    data.results.forEach(poke => {
        const option = document.createElement('option');
        option.value = poke.name;
        option.textContent = poke.name.toUpperCase();
        select.appendChild(option);
    });
}

async function buscarPokemon(nombre) {
    if (!nombre) return;

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
        const data = await res.json();

        const img = data.sprites.front_default || data.sprites.other['official-artwork'].front_default || 'https://via.placeholder.com/150';

        display.innerHTML = `
            <img src="${img}" alt="${data.name}">
            <h2>${data.name.toUpperCase()}</h2>
            <p>ID: ${data.id}</p>
            <p>Tipo: ${data.types.map(t => t.type.name).join(' / ')}</p>
        `;

        if (data.cries && data.cries.latest) {
            new Audio(data.cries.latest).play();
        }

    } catch (error) {
        display.innerHTML = `<p style="color:white">Error: Pokémon no encontrado</p>`;
    }
}

btn.addEventListener('click', () => buscarPokemon(input.value));
select.addEventListener('change', (e) => buscarPokemon(e.target.value));

cargarNombres();