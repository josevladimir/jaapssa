import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  state: String = 'compressed';

  items: any[] = [
    {
      title: "Dashboard",
      link: "/",
      icon: "grid-outline"
    },
    {
      title: "Ventas",
      link: "ventas",
      icon: "file-text-outline"
    },
    {
      title: "Conexión/Multa",
      link: "conexion",
      icon: "archive-outline"
    },
    {
      title: "Lecturas",
      link: "lecturas",
      icon: "layers-outline"
    },
    {
      title: "Compras",
      link: "compras",
      icon: "shopping-cart-outline"
    },
    {
      title: "Inventario",
      link: "inventario",
      icon: "shopping-bag-outline"
    },
    {
      title: "Clientes",
      link: "clientes",
      icon: "people-outline"
    },
    {
      title: "Empleados",
      link: "empleados",
      icon: "people-outline"
    }
  ];


  constructor(
  ) { }

  ngOnInit(): void {
  }

}
