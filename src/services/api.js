import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://food-explorer-app.onrender.com'
	/* baseURL: 'http://localhost:3333' */
})

// Adiciona o Bearer token no cabeçalho das requisições
api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('@foodexplorer:token')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error) => {
		return Promise.reject(error.response)
	}
)

// Verifica o status da resposta (status 401 Unauthorized) e redireciona para tela de login
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && [401, 403].includes(error.response.status)) {
			localStorage.removeItem('@foodexplorer:user')
			localStorage.removeItem('@foodexplorer:token')

			window.location.reload()
		}

		return Promise.reject(error)
	}
)
