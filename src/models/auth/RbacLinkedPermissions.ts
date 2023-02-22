import { RBAC_LINKED_PERMISSIONS, STORE_AUTH } from '#constants'
import {Column,Entity,Index,JoinColumn,ManyToOne} from 'typeorm'
import {RbacPermissions} from './RbacPermissions'


@Index('fk__rbac_linked_permissions__rbac_permissions1',['id',],{  })
@Index('fk__rbac_linked_permissions__rbac_permissions2',['linkedId',],{  })
@Entity(RBAC_LINKED_PERMISSIONS , { schema: STORE_AUTH })
export  class RbacLinkedPermissions {
  // @Column('int',{ primary:true,name:'id',comment:'Permission id',unsigned:true })
  // id!: number

  // @Column('int',{ primary:true,name:'linkedId',comment:'Linked Permission id',unsigned:true })
  // linkedId!: number

  // @ManyToOne(()=>RbacPermissions,rbacPermissions=>rbacPermissions.rbacLinkedPermissions,{ onDelete:'CASCADE',onUpdate:'RESTRICT' })
  // @JoinColumn([{ name: 'id', referencedColumnName: 'id' },
  // ])

  // :RbacPermissions

  // @ManyToOne(()=>RbacPermissions,rbacPermissions=>rbacPermissions.rbacLinkedPermissions2,{ onDelete:'CASCADE',onUpdate:'RESTRICT' })
  // @JoinColumn([{ name: 'linkedId', referencedColumnName: 'id' },
  // ])

  // linked!: RbacPermissions

}
